import React from 'react';
import { Table, Input, Row, Col, Button } from 'antd';
import Highlighter from 'react-highlight-words'; // npm i react-highlight-words
import { SearchOutlined } from '@ant-design/icons'
const { Column, ColumnGroup } = Table;

class TableAD extends React.Component {

    state = {
        searchText: '',
        searchedColumn: '',
    };
    
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search by Order ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Row>
                <Col span={11}>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        // icon={<SearchOutlined style={{color:'white'}}/>}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Col>
            </Row>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
        ) : (
            text
        ),
    });
    
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
    };
    
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render(){
        
        const columns = [
            {
                title: 'ID',
                dataIndex: 'key',
                key: 'key',
                render: text => <a href>{text}</a>,
            },
            {
                title: 'First Name',
                dataIndex: 'fname',
                key: 'fname',
            },
            {
                title: 'Last Name',
                dataIndex: 'lname',
                key: 'lname',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                render: text => `${text} th`
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
        ]

        const colSortFilter = [
            {
                title: 'ID',
                dataIndex: 'key',
                key: 'key',
                render: text => <a href>{text}</a>,
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.key - b.key
            },
            {
                title: 'First Name',
                dataIndex: 'fname',
                key: 'fname',
                sorter: (a, b) => {
                    a = a.fname || '';
                    b = b.fname || '';
                    return a.localeCompare(b);
                },
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('fname'),
            },
            {
                title: 'Last Name',
                dataIndex: 'lname',
                key: 'lname',
                sorter: (a, b) => {
                    a = a.fname || '';
                    b = b.fname || '';
                    return a.localeCompare(b);
                },
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('lname'),
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                render: text => `${text} th`,
                sorter: (a, b) => a.age - b.age
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [
                    {text: 'Jakarta', value: 'Jakarta'},
                    {text: 'Bandung', value: 'Bandung'},
                    {text: 'Surabaya', value: 'Surabaya'},
                ],
                onFilter: (value, record) => value.includes(record.address)
            },
        ]

        const data = [
            {key: '1', fname: 'Andi', lname: 'White', age: 32, address: 'Jakarta'},
            {key: '2', fname: 'Budi', lname: 'Brown', age: 22, address: 'Bandung'},
            {key: '3', fname: 'Cici', lname: 'Black', age: 29, address: 'Jakarta'}
        ];

        return(
        <div style={{marginLeft:'30px', marginRight:'30px'}}>

            {/* BASIC TABLE */}
            <h3>1. Basic Tables</h3>

            <Table columns={columns} dataSource={data}/>
            
            <hr style={{margin:'50px'}}/>


            {/* BASIC JSX TABLE */}
            <h3>2. Basic JSX Tables</h3>

            <Table dataSource={data}>
                <Column title="ID" dataIndex="key" key="key" />
                <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="fname" key="fname" />
                    <Column title="Last Name" dataIndex="lname" key="lname" />
                </ColumnGroup>
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
            </Table>

            <hr style={{margin:'50px'}}/>


            {/* SORT & FILTER */}
            <h3>3. Tables with columns sort/filter feature</h3>

            <Table columns={colSortFilter} dataSource={data} 
            onChange={
                (pagination, filters, sorter, extra) => {console.log(pagination, filters, sorter, extra)}
            }/>
            
            <hr style={{margin:'50px'}}/>

        </div>
    )}
}

export default TableAD;