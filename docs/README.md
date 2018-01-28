# bell-docsify
bell-docsify

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
        template: `
            <div>
                <Alert>222 An info prompt</Alert>
                <Alert type="success">A success prompt</Alert>
                <Alert type="warning">A warning prompt</Alert>
                <Alert type="error">An error prompt</Alert>
            </div>
        `
    }

3

    export default {
        template: `
            <div>
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