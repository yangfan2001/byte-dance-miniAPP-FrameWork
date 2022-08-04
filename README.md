# byte-dance-miniAPP-FrameWork
字节跳动暑期营简单的小程序框架的实现

## render-jsx
参考了[神说要有光：手写简易前端框架](https://mp.weixin.qq.com/s?__biz=Mzg3OTYzMDkzMg==&mid=2247487869&idx=1&sn=a2591ac0519401de05f1462f6dd10d47&chksm=cf00de46f8775750a84dd9c93c4f9a5563d81a20acbe30b047e1636111f5b5a9b9da0a7b0e7d&cur_album_id=2150426582392406017&scene=189#wechat_redirect)中基于jsx对小程序组建的使用，其中包括了如下的部分：

1、利用babel对jsx进行编译

2、通过jsx生成的vdom来操作dom进行render，可以通过类似dsl设计实现自定义组件（这里简单实现了一个demo组件）

3、实现简单的diff算法来进行dom的更新

4、尝试了利用WebWorker在生成dom的时候来对用户的逻辑代码进行限制和节约计算时间，但这里主要通过利用将计算逻辑放置到新建的WebWorker线程中实现。

5、简单的demo进行测试

### 使用

npm stall，npm run build后，运行index.html

## render-only

与上述类似，采用相同的渲染逻辑。

但是在用户代码运行在WebWorker线程，渲染运行在主线程，函数通过全局变量数组进行传递，但由于时间有限，只完成了数据渲染部分。

### 使用

npm stall，npm run build，运行dist/index.html

## More

整个过程学到了很多，但是由于本身js就不是很熟悉，因此也花了许多时间学习前端相关的其他知识。前面花了很多时间也还是没有彻底研究透小程序的双线程如何实现。最后还看到了[Voe](https://github.com/sxzxiaofeng/voe)这个简洁基于Vue语法实现的框架，并在createlement函数里面借鉴了其通过WbWorker传递函数的写法。可惜时间和能力有限，没有完全透彻的学习这一框架。





