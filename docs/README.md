# bell-docsify
bell-docsify


> isViewFullBlock

    export default {
        isViewFullBlock: true,
        template: `
            <div>
                <Layout style="height: 400px;">
                    <Sider collapsible>
                        <Menu mode="vertical" active-name="1-2" theme="dark">
                            <MenuItem name="1-1">
                                <span style="display: none;">
                                    我
                                </span>
                                <span>Option 1</span>
                            </MenuItem>
                            <MenuItem name="1-2">
                                <Icon type="search"></Icon>
                                <span>Option 2</span>
                            </MenuItem>
                            <MenuItem name="1-3">
                                <Icon type="settings"></Icon>
                                <span>Option 3</span>
                            </MenuItem>
                        </Menu>
                    </Sider>
                    <Content>
                        <Header style="background-color: #fff; boxShadow: 0 2px 3px 2px rgba(0,0,0,.1);"></Header>
                        <Content style="padding: 0 16px 16px">
                            Content
                        </Content>
                    </Content>
                </Layout>
            </div>
        `,
    }

1

    export default {
        template: `
            <div>
                <Alert>An info prompt</Alert>
                <Alert type="success">A success prompt</Alert>
                <Alert type="warning">A warning prompt</Alert>
                <Alert type="error">An error prompt</Alert>
            </div>
        `
    }

2

    export default {
        isViewFullBlock: true,
        template: `
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
                <br><br>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider hide-trigger>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
                <br><br>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider hide-trigger>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
                <br><br>
                <Layout>
                    <Sider hide-trigger>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
                <br><br>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider hide-trigger>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                </Layout>
            </div>
        `,
        data: {
            isViewFullBlock: true
        }
    }

3

    export default {
        template: `
            <div style="position: absolute;">
                <div>
                    <Tooltip placement="top-start" content="这里是提示文字">
                        <Button>上左</Button>
                    </Tooltip>
                    <Tooltip placement="top" content="这里是提示文字">
                        <Button>上</Button>
                    </Tooltip>
                    <Tooltip placement="top-end" content="这里是提示文字">
                        <Button>上右</Button>
                    </Tooltip>
                </div>
                <br><br>
                <div>
                    <Tooltip placement="bottom-start" content="这里是提示文字">
                        <Button>下左</Button>
                    </Tooltip>
                    <Tooltip placement="bottom" content="这里是提示文字">
                        <Button>下</Button>
                    </Tooltip>
                    <Tooltip placement="bottom-end" content="这里是提示文字">
                        <Button>下右</Button>
                    </Tooltip>
                </div>
                <br><br>

                <div>
                    <Tooltip placement="right-start" content="这里是提示文字">
                        <Button>右上</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <Tooltip placement="right" content="这里是提示文字">
                        <Button>右</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <Tooltip placement="right-end" content="这里是提示文字">
                        <Button>右下</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <br><br>
                    <Tooltip placement="left-start" content="这里是提示文字">
                        <Button>左上</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <Tooltip placement="left" content="这里是提示文字">
                        <Button>左</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <Tooltip placement="left-end" content="这里是提示文字">
                        <Button>左下</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                </div>
            </div>
        `
    }