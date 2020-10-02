import React from 'react';
import { 
    Input, Space, Select, Col, Row, InputNumber, Checkbox, 
    DatePicker, AutoComplete, Cascader, Radio, Rate, Slider
} from 'antd';
import { 
    UserOutlined, SettingOutlined, AudioOutlined, 
    FrownOutlined, MehOutlined, SmileOutlined
} from '@ant-design/icons';
const { Option } = Select;
const { Search } = Input;
const { RangePicker } = DatePicker

class FormAD extends React.Component {

    state = {
        value: 1,
        star: 3
    };

    render(){
        
        let selectBefore = (
            <Select defaultValue="http://" className="select-before">
              <Option value="http://">http://</Option>
              <Option value="https://">https://</Option>
            </Select>
          );
        
        let selectAfter = (
            <Select defaultValue=".com" className="select-after">
              <Option value=".com">.com</Option>
              <Option value=".jp">.co.id</Option>
              <Option value=".cn">.go.id</Option>
              <Option value=".org">.sch.id</Option>
            </Select>
        );

        const options = [
            {
              value: 'Jawa Tengah',
              label: 'Jawa Tengah',
              children: [
                {
                  value: 'Surakarta',
                  label: 'Surakarta',
                  children: [
                    {
                      value: 'Laweyan',
                      label: 'Laweyan',
                    },
                  ],
                },
            ],
        },
        {
              value: 'Jawa Barat',
              label: 'Jawa Barat',
              children: [
                {
                  value: 'Bandung',
                  label: 'Bandung',
                  children: [
                    {
                      value: 'Cimahi',
                      label: 'Cimahi',
                    },
                  ],
                },
              ],
            },
        ];

        const suffix = (
            <AudioOutlined
              style={{
                fontSize: 16,
                color: '#1890ff',
              }}
            />
        );
        
        const plainOptions = ['Apple', 'Pear', 'Orange']

        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

        const { star } = this.state;

        const customIcons = {
            1: <FrownOutlined />,
            2: <FrownOutlined />,
            3: <MehOutlined />,
            4: <SmileOutlined />,
            5: <SmileOutlined />,
        };
          
        return(
        <div style={{marginLeft:'30px', marginRight:'30px', width:'30%'}}>

            <h3>Input</h3>
            <Input placeholder="Basic usage" />
            <br /><br />
            <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
            <br /><br />
            <Input placeholder="default size" prefix={<UserOutlined />} />
            <br /><br />
            <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
            <br/><br/>

            <div style={{ marginBottom: 16 }}>
                <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            </div>

            <InputNumber defaultValue={1} />&nbsp;&nbsp;
            <InputNumber defaultValue={2} size="small"/>&nbsp;&nbsp;
            <InputNumber defaultValue={3} size="large"/>

            <hr style={{margin:'50px'}}/>
            
            {/* ###################################################### */}

            <h3>Input Group</h3>
            <div className="site-input-group-wrapper">
                <Input.Group size="large">
                    <Row gutter={8}>
                        <Col span={5}>
                            <Input defaultValue="021" />
                        </Col>
                        <Col span={8}>
                            <Input defaultValue="123321" />
                        </Col>
                    </Row>
                </Input.Group>
            
                <br />
            
                <Input.Group compact>
                    <Input style={{ width: '20%' }} defaultValue="021" />
                    <Input style={{ width: '30%' }} defaultValue="123321" />
                </Input.Group>
            
                <br />
            
                <Input.Group compact>
                    <Select defaultValue="Jawa Tengah">
                        <Option value="Jawa Tengah">Jawa Tengah</Option>
                        <Option value="Jawa Barat">Jawa Barat</Option>
                    </Select>
                    <Input style={{ width: '50%' }} defaultValue="Jl. ABC, Kampung DEF" />
                </Input.Group>
                
                <br />
                
                <Input.Group compact>
                    <Input style={{ width: '20%' }} defaultValue="021" />
                    <Input.Search style={{ width: '30%' }} defaultValue="123321" />
                </Input.Group>
                
                <br />
                
                <Input.Group compact>
                    <Select defaultValue="Option1">
                        <Option value="Option1">Option1</Option>
                        <Option value="Option2">Option2</Option>
                    </Select>
                    <Input style={{ width: '50%' }} defaultValue="input content" />
                </Input.Group>
                
                <br />
                
                <Input.Group compact>
                    <Input style={{ width: '50%' }} defaultValue="input content" />
                    <DatePicker style={{ width: '50%' }} />
                </Input.Group>
                
                <br />
                
                <Input.Group compact>
                    <Input style={{ width: '30%' }} defaultValue="input content" />
                    <DatePicker.RangePicker style={{ width: '70%' }} />
                </Input.Group>
                
                <br />
                
                <Input.Group compact>
                    <Select defaultValue="Option1-1">
                        <Option value="Option1-1">Option1-1</Option>
                        <Option value="Option1-2">Option1-2</Option>
                    </Select>
                    <Select defaultValue="Option2-2">
                        <Option value="Option2-1">Option2-1</Option>
                        <Option value="Option2-2">Option2-2</Option>
                    </Select>
                </Input.Group>
                
                <br />
                
                <Input.Group compact>
                    <Select defaultValue="1">
                        <Option value="1">Between</Option>
                        <Option value="2">Except</Option>
                    </Select>
                    <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
                    <Input
                        className="site-input-split"
                        style={{
                        width: 30,
                        borderLeft: 0,
                        borderRight: 0,
                        pointerEvents: 'none',
                        }}
                        placeholder="~"
                        disabled
                    />
                    <Input
                        className="site-input-right"
                        style={{
                        width: 100,
                        textAlign: 'center',
                        }}
                        placeholder="Maximum"
                    />
                </Input.Group>
                
                <br />
                
                <Input.Group compact>
                    <Select defaultValue="Sign Up" style={{ width: '30%' }}>
                        <Option value="Sign Up">Sign Up</Option>
                        <Option value="Sign In">Sign In</Option>
                    </Select>
                    <AutoComplete
                        style={{ width: '70%' }}
                        placeholder="Email"
                        options={[{ value: 'text 1' }, { value: 'text 2' }]}
                    />
                </Input.Group>
                
                <br />
                
                <Input.Group compact>
                    <Select style={{ width: '30%' }} defaultValue="Home">
                        <Option value="Home">Home</Option>
                        <Option value="Company">Company</Option>
                    </Select>
                    <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
                </Input.Group>

            </div>

            <hr style={{margin:'50px'}}/>

            {/* ######################################## */}
            <h3>Input Group</h3>

            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
            <br />
            <br />
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
            <br />
            <br />
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
            />
            <br />
            <br />
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={value => console.log(value)}
            />
            
            <hr style={{margin:'50px'}}/>

            {/* ######################################## */}
            <h3>Datepicker</h3>

            <Space direction="vertical">
                <DatePicker size='small' onChange={onChange} />
                <DatePicker size='large' onChange={onChange} picker="week" />
                <DatePicker onChange={onChange} picker="month" />
                <DatePicker onChange={onChange} picker="quarter" />
                <DatePicker onChange={onChange} picker="year" />
            </Space>
            
            <br/><br/>

            <Space direction="vertical" size={12}>
                <RangePicker />
                <RangePicker showTime />
                <RangePicker picker="week" />
                <RangePicker picker="month" />
                <RangePicker picker="year" />
            </Space>
            
            <hr style={{margin:'50px'}}/>

            {/* ######################################## */}
            <h3>Checkbox & Radio Button</h3>

            <Checkbox onChange={(e)=>{console.log(e.target.checked)}}>Checkbox</Checkbox>
            <Checkbox defaultChecked={false} disabled />
            <Checkbox defaultChecked disabled />
            
            <br/><br/>
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
            
            <br/><br/>
            <Radio>Radio</Radio>

            <br/><br/>
            <Radio.Group onChange={ (e) => {this.setState({value: e.target.value})} } 
            value={this.state.value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>
            
            <br/><br/>
            <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="a">Jakarta</Radio.Button>
                <Radio.Button value="b">Palembang</Radio.Button>
                <Radio.Button value="c">Denpasar</Radio.Button>
                <Radio.Button value="d">Manado</Radio.Button>
            </Radio.Group>

            <hr style={{margin:'50px'}}/>

            {/* ######################################## */}
            <h3>Rate & Slider</h3>

            <Rate/>
            <br/><br/>

            <Rate tooltips={desc} onChange={ (star) => {this.setState({ star })} } value={star} />
            {star ? <span className="ant-rate-text">{desc[star - 1]}</span> : ''}
            <br/><br/>
            
            <Rate
                defaultValue={3}
                character={({ index }) => {
                    return customIcons[index + 1];
                }}
            />
            <br/><br/>

            <Slider defaultValue={30} disabled={false} /><br/>
            <Slider range defaultValue={[20, 50]} disabled={false} /><br/>
            <Slider defaultValue={70} tooltipVisible /><br/>

            <div style={{display:'inline-block', height: 300, marginLeft: 70}}>
                <Slider vertical defaultValue={30} />
            </div>
            <div style={{display:'inline-block', height: 300, marginLeft: 70}}>
                <Slider vertical range step={10} defaultValue={[20, 50]} />
            </div>

            <hr style={{margin:'50px'}}/>
            
        </div>
    )}
}

export default FormAD;