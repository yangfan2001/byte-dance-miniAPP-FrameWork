# byte-dance-miniAPP-FrameWork
字节跳动暑期营简单的小程序框架的实现

## render-jsx
参考了[神说要有光：手写简易前端框架](https://mp.weixin.qq.com/s?__biz=Mzg3OTYzMDkzMg==&mid=2247487869&idx=1&sn=a2591ac0519401de05f1462f6dd10d47&chksm=cf00de46f8775750a84dd9c93c4f9a5563d81a20acbe30b047e1636111f5b5a9b9da0a7b0e7d&cur_album_id=2150426582392406017&scene=189#wechat_redirect)中基于jsx对小程序组建的使用，其中包括了如下的部分：

1、利用babel对jsx进行编译

2、通过jsx生成的vdom来操作dom进行render，可以通过类似dsl设计实现自定义组件（这里简单实现了一个登录框）

3、实现简单的diff算法来进行dom的更新

4、尝试了利用WebWorker在生成dom的时候来对用户的逻辑代码进行限制和节约计算时间，但这里主要通过利用将计算逻辑放置到新建的WebWorker线程中实现。

5、简单的demo进行测试

### 使用

npm stall，npm run build后，运行index.html

## render-only

与上述类似，采用相同的渲染逻辑。

但是在用户代码运行在WebWorker线程，渲染运行在主线程，函数通过全局变量数组进行传递，但由于时间有限，只完成了数据渲染部分，并没有完成数据更新以及组件设计。

### 使用

npm stall，npm run build，运行dist/index.html





