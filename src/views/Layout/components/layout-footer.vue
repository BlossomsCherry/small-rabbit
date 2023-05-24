<template>
    <div class="footer">
        <!--  联系我们 -->
        <div class="contact">
            <div class="container">
                <dl>
                    <dt>
                        <span>客服服务</span>
                    </dt>
                    <div class="dd">
                        <dd>
                            <i class="iconfont icon-kefu"></i>
                            <span>在线客服</span>
                        </dd>
                        <dd>
                            <i class="iconfont icon-question"></i>
                            <span>问题反馈</span>
                        </dd>
                    </div>
                </dl>
                <dl>
                    <dt>
                        <span>关注我们</span>
                    </dt>
                    <div class="dd">
                        <dd>
                            <i class="iconfont icon-weixin"></i>
                            <span>公众号</span>
                        </dd>
                        <dd>
                            <i class="iconfont icon-weibo"></i>
                            <span>微博</span>
                        </dd>
                    </div>
                </dl>
                <dl>
                    <dt>
                        <span>下载APP</span>
                    </dt>
                    <div class="dd">
                        <dd>
                            <img src="@/assets/images/qrcode.jpg" alt="" />
                        </dd>
                        <dd>
                            <span>扫描二维码</span>
                            <span>立马下载APP</span>
                            <a href="javascript:;">下载页面</a>
                        </dd>
                    </div>
                </dl>
                <dl>
                    <dt>
                        <span>服务热线</span>
                    </dt>
                    <div class="dd">
                        <dd>
                            400-0000-000
                            <span>周一至周日 8:00-18:00</span>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

        <!-- 其它 -->
        <div class="extra">
            <div class="container">
                <div class="slogan">
                    <a href="javascript:;">
                        <i class="iconfont icon-footer01"></i>
                        <span>价格亲民</span>
                    </a>
                    <a href="javascript:;">
                        <i class="iconfont icon-footer02"></i>
                        <span>物流快捷</span>
                    </a>
                    <a href="javascript:;">
                        <i class="iconfont icon-footer03"></i>
                        <span>品质新鲜</span>
                    </a>
                </div>
                <div class="copyright">
                    <div class="top">
                        <a href="javascript:;">关于我们</a>
                        <a href="javascript:;">帮助中心</a>
                        <a href="javascript:;">售后服务</a>
                        <a href="javascript:;">配送与验收</a>
                        <a href="javascript:;">商务合作</a>
                        <a href="javascript:;">搜索推荐</a>
                        <a href="javascript:;">友情链接</a>
                    </div>
                    <p>CopyRight © 小兔鲜儿</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="less" scoped>
    .footer {
        display: flex;
        padding-top: 20px;
        background-color: #f5f5f5;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .contact {
            padding: 60px 0 40px 25px;
            width: 100%;
            background-color: #fff;
            .container {
                display: flex;
                justify-content: space-between;
                dl {
                    flex: 1;
                    padding: 0 72px;
                    border-right: 1px solid #f2f2f2;
                    &:first-child {
                        padding-left: 0;
                    }
                    &:last-child {
                        padding-right: 0;
                        border-right: 0;
                        font-size: 22px;

                        dd {
                            width: 100% !important;
                            border: 0 !important;
                            font-size: 22px !important;
                            color: #666 !important;
                            span {
                                font-size: 15px;
                            }
                        }
                    }
                    &:nth-child(3) {
                        dd {
                            &:last-child {
                                // display: flex;
                                width: 106px;
                                border: 0;
                                font-size: 14px;
                                a {
                                    margin-top: 5px;
                                    padding: 10px 25px;
                                    border-radius: 3px;
                                    background-color: var(--primary-color);
                                    color: #fff;
                                    line-height: 1;
                                }
                            }
                        }
                    }
                    dt {
                        font-size: 18px;
                        color: #999;
                        text-align: center;
                    }
                    .dd {
                        display: flex;
                        dd {
                            display: flex;
                            margin: 36px 12px 0 0;
                            padding-top: 10px;
                            width: 92px;
                            height: 92px;
                            border: 1px solid #ededed;
                            font-size: 14px;
                            color: #999;
                            box-sizing: border-box;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            .iconfont {
                                font-size: 36px;
                                color: #666;
                                margin-bottom: 10px;
                            }
                            .iconfont:hover {
                                color: var(--primary-color);
                            }
                            img {
                                width: 76px;
                            }
                        }
                    }
                }
            }
        }
        .extra {
            display: flex;
            width: 100%;
            background-color: #333;
            justify-content: center;
            .container {
                .slogan {
                    display: flex;
                    padding: 60px 100px;
                    border-bottom: 1px solid #434343;
                    justify-content: space-between;
                    a {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        font-size: 28px;
                        color: #fff;
                        .iconfont {
                            margin-right: 10px;
                            font-size: 50px;
                        }
                    }
                }
                .copyright {
                    display: flex;
                    padding-top: 40px;
                    height: 170px;
                    flex-direction: column;
                    align-items: center;
                    .top {
                        margin-bottom: 20px;
                        a {
                            padding: 0 10px;
                            border-right: 1px solid;
                            color: #999;
                            font-size: 15px;
                            &:last-child {
                                border: 0;
                            }
                        }
                    }
                    p {
                        color: #999;
                        font-size: 15px;
                        cursor: default;
                    }
                }
            }
        }
    }
</style>
