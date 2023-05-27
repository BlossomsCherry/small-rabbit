<template>
    <div class="nav">
        <div class="container">
            <ul>
                <li><router-link to="/login">请先登录</router-link></li>
                <li><router-link to="/">帮助中心</router-link></li>
                <li><router-link to="/">关于我们</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup></script>

<style lang="less" scoped>
.nav {
    display: flex;
    background-color: #333;
    justify-content: center;

    .container {
        height: 53px;

        ul {
            display: flex;
            height: 100%;
            justify-content: end;
            align-items: center;

            li {
                a {
                    display: inline-block;
                    padding: 0 15px;
                    font-size: 14px;
                    color: #cdcdcd;
                    line-height: 1;
                }

                a:hover {
                    color: var(--primary-color);
                }

                ~li {
                    a {
                        border-left: 2px solid #666;
                    }
                }
            }
        }
    }
}</style>
