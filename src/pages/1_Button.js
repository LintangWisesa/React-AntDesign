import React from 'react';
import { Button, Tooltip, Radio } from 'antd';
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';

class ButtonAD extends React.Component {
    
    state = {
        size: 'large',
        loadings: [],
    };
    
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    
    enterLoading = index => {
        this.setState(({ loadings }) => {
          const newLoadings = [...loadings];
          newLoadings[index] = true;
    
          return {
            loadings: newLoadings,
          };
        });
        setTimeout(() => {
          this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = false;
    
            return {
              loadings: newLoadings,
            };
          });
        }, 6000);
    };

    render(){

        const { size, loadings } = this.state;
        
        return(
        <div>
            <h3>Button Types</h3>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <hr/>

            <h3>Button Icons</h3>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
                A
            </Button>
            <Button type="primary" icon={<SearchOutlined />}>
                Search
            </Button>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
                <Button icon={<SearchOutlined />}>Search</Button>
            <br />
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
            <hr/>

            <h3>Size</h3>
            <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <Button type="primary" size={size}>
            Primary
            </Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>
            Dashed
            </Button>
            <br />
            <Button type="link" size={size}>
            Link
            </Button>
            <br />
            <Button type="primary" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download
            </Button>

            <hr/>
            <h3>Loading Button</h3>
            <Button type="primary" loading>
            Loading
            </Button>
            <Button type="primary" size="small" loading>
            Loading
            </Button>
            <Button type="primary" icon={<PoweroffOutlined />} loading />
            <br />
            <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
            Click me!
            </Button>
            <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => this.enterLoading(1)}
            >
            Click me!
            </Button>
            <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => this.enterLoading(2)}
            />

        </div>
    )}
}

export default ButtonAD;