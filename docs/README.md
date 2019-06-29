# bell-docsify


```js
export default {
  isViewFullBlock: true,
  height: 400,
  data: function () {
    return {
      theme: 'dark'
    }
  },
  template: `
    <div class="bell-template">
      <Menu theme="{{theme}}" activeName="1">
        <MenuItem name="1">
          <Icon name="paper"></Icon>
          内容管理
        </MenuItem>
        <MenuItem name="2">
          <Icon name="people"></Icon>
          用户管理
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon name="stats" />
            统计分析（子菜单）
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
          <Icon name="settings"></Icon>
          <a href="https://yoxjs.github.io/yox/#/ts" target="_blank">
            综合设置（外链）
          </a>
        </MenuItem>
      </Menu>
      <br>
      <p>切换主题</p>
      <RadioGroup model="theme" type="info">
        <Radio label="light" value="light"></Radio>
        <Radio label="dark" value="dark" checked></Radio>
      </RadioGroup>
      <style>
        .bell-icon {
          margin-right: 6px;
        }
      </style>
    </div>
  `,
}
```

> isViewFullBlock

    export default {
      isViewFullBlock: true,
      height: 400,
      template: `
        <Layout className="layout-demo-wrapper">
          <Header>
            <template slot="left">
              <div class="layout-logo"></div>
            </template>
            <Menu mode="horizontal" theme="dark" active-name="1">
              <MenuItem name="1">
                <Icon style="margin-right: 6px;" type="navigate"></Icon>
                Item 1
              </MenuItem>
              <MenuItem name="2">
                <Icon style="margin-right: 6px;" type="keypad"></Icon>
                Item 2
              </MenuItem>
              <MenuItem name="3">
                <Icon style="margin-right: 6px;" type="analytics"></Icon>
                Item 3
              </MenuItem>
              <MenuItem name="4">
                <Icon style="margin-right: 6px;" type="paper"></Icon>
                Item 4
              </MenuItem>
            </Menu>
          </Header>
          <Layout>
            <Sider>
              <Menu mode="inline" theme="dark" active-name="1">
                <MenuItem name="1">
                  <Icon style="margin-right: 6px;" type="navigate"></Icon>
                  Item 1
                </MenuItem>
                <MenuItem name="2">
                  <Icon style="margin-right: 6px;" type="keypad"></Icon>
                  Item 2
                </MenuItem>
                <MenuItem name="3">
                  <Icon style="margin-right: 6px;" type="analytics"></Icon>
                  Item 3
                </MenuItem>
                <MenuItem name="4">
                  <Icon style="margin-right: 6px;" type="paper"></Icon>
                  Item 4
                </MenuItem>
              </Menu>
            </Sider>
            <Layout style="padding: 0 24px 24px">
              <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Layout</BreadcrumbItem>
              </Breadcrumb>
              <Content style="padding: 24px; min-height: 280px; background: #fff;">
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      `,
    }

> card

    export default {
      height: 400,
      template: `
        <div>
          <Card>
            <CardHeader>
              <template slot="title">
                Myron Avatar
              </template>

              <template slot="subTitle">
                sub title
              </template>

              <template slot="avatar">
                <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" ></Avatar>
              </template>
            </CardHeader>

            <CardMedia title="Image Title" subTitle="Image Sub Title">
              <img src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />
            </CardMedia>

            <CardTitle title="Content Title" subTitle="Content Title"/>

            <CardText>
              散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
              调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
              似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
              找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            </CardText>

            <CardActions>
              <Button>
                Action1
              </Button>
              <Button>
                Action2
              </Button>
            </CardActions>
          </Card>
        </div>
      `
    }