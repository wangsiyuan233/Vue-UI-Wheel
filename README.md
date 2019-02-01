# icon 需求
**1、 制作 icon :设置 icon 在字体的左边或者右边**

第一步：在 `index.html` 里面 将 `icon-position` 设置为 `right`，`<g-button icon="settings" icon-position="right">设置</g-button>`，剩下的脏活累活都要在 `button.vue` 里面做。
第二步：在 `button.vue` 里面， 把等高的图标和文字对齐：`display: inline-flex;justify-content: center;align-items: center;`（吃一个 `flex` 三件套）
第三步：在 `button.vue` 里面，`<button>` 按钮分为 `<svg>` 和 `<div class="content">` 两个部分
```
<button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
		<!-- v-if 是用来判断有没有 svg 的，如果没有 svg，字样就是居中的-->
        <svg class="icon" v-if="icon">
            <!--第一个 : 是 v-bind 的缩写；反引号表示里面的内容是 js 字符串-->
            <!--结合 index.html 我们可以知道：用户只用输入 settings ，我们就匹配了 icon-->
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <div class="content">
            <!-- 神奇的地方：控制台里 “设置”两字 在 slot 的位置-->
            <slot></slot>
        </div>
</button>
```
配套的 `css` 为
```
 /*默认的 icon 位置*/
        > .icon { order: 1;}
        > .content {order: 2;}

/*出现 icon-right 时的 icon 位置*/
        &.icon-right {
            > .icon {order: 2;}
            > .content{order:1;}
        }
```
也就是说，在 `index.html` 里面我们一定要设置是好图标是在右边的，剩下的逻辑部分都在 `button.vue` 里面，通过 `svg` 的 `class` 来选择不同的 `order`

**2、 发现并排的按钮们在垂直距离上高矮不一**

只有一步： `.g-button{ vertical-align: middle;} `

**3、转动起来的小菊花 -- loading**

第一步：在 iconfont 更新 svg 地址
第二步： button.vue 里面的样式
`<g-icon class="loading" name="loading" v-if="loading"></g-icon>`
```
 /*loading 的样式*/
        @keyframes spin {
            0%{transform: rotate(0deg);}
            100%{transform: rotate(360deg);}
        }

 /*loading 动画*/
        .loading{
            animation: spin 3s infinite linear;
        }
```
第三步：用 `v-if` 控制 `loading` 是否出现  
 `<g-icon class="loading" name="loading" v-if="loading"></g-icon>`

第四步：其他icon 和 loading 图标不能同时出现
 `<g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>`

第五步：icon 在文字右边的时候，切换出来的 loading 也要在文字右边
 `<g-icon class="loading icon" name="loading" v-if="loading"></g-icon>`

第六步：点击按钮才出现 `loading` 转动

绑定“点击”这个动作：

`button.vue` :
 `<button :class="{[`icon-${iconPosition}`]:true}" class="g-button"@click="$emit('click')">`

`app.js` ：
```
new Vue({
    el:'#app',
    data:{loading1:false}
})
```

最后设置一下 `index.html` ：
 `<g-button :loading="loading1" @click="loading1 = !loading1">设置切换</g-button>`

*但是这样很麻烦啊！！ 这个loading1 只是为单个图标服务的，剩下的 g-button 按钮需要去 app.js 重新设置*

**4、三个按钮（前进 + 更多 + 后退）合并在一起，但是三个按钮 hover 时一定要浮现出四条边框**

创建 button-group.vue（在 app.js 里面 import + 注册）

第一步：装饰一下第一个按钮和第二个按钮

第二步：
```
.g-button-group .g-button {
            border-radius: 0;

		    /*重合部分合并*/
            margin-left: -1px;
			/* 要让按钮的四条边框都浮现出来*/
            &:hover{
                position: relative;
                z-index: 1;
            }
}
```
试了一下，这三个按钮之间没有缝隙是因为在 button-group 组件里面，干掉重合部分就是 ml=-1

----------

# input 需求