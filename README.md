![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# React & Ant Design

### 1. Setup

- Create React application

    ```bash
    $ npx create-react-app yourReactApp
    
    $ cd yourReactApp 
    ```

- Setup Ant Design on React application

    - Install Ant Design package

        ```bash
        $ npm i antd @ant-design/icons
        ```

    - Add ```antd/dist/antd.css``` at the top of ```src/App.css```

        ```javascript
        @import '~antd/dist/antd.css';
        ```

- Run application

    - Modify ```src/App.js```, import Button component from ```antd```.

        ```javascript
        import React from 'react';
        import { Button } from 'antd';
        import './App.css';

        const App = () => (
        <div className="App">
            <Button type="primary">
                OK
            </Button>
        </div>
        );

        export default App;
        ```
    
    - Run it!

        ```bash
        $ npm start
        ```

<hr>

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Youtube](https://www.youtube.com/user/lintangbagus) |
[LinkedIn](https://www.linkedin.com/in/lintangwisesa/) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)
