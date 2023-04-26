<template>
    <div>
        <pv-card class="generalcard">
            <template #header>
                <div class="top">
                    <h3>Forgot Password</h3>
                    <p>Enter your email associated with your
                        JobSync account and we will send you a reset link</p>
                </div>
            </template>
            <template #content>
                <div class="medium">
                    <!--<div>
                        <pv-icon class="pi pi-check"></pv-icon>
                    </div>-->
                    <div>
                        <p>If the e-mail is registered as an account, you will receive an e-mail
                            with further instructions within a few minutes</p>
                    </div>
                </div>
                <div class="inputdata">
                    <pv-inputtext type="text" placeholder="E-mail" class="itext"/>
                    <pv-button label="Send me the link" class="button"></pv-button>
                    <a href="">Already have an account? Sign in</a>
                </div>
            </template>
        </pv-card>
    </div>
</template>

<script>
export default {
    name: "forgotpassword",
}
</script>

<style scoped>
.generalcard{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 24px;
    position: absolute;
    width: 454px;
    height: 545px;
    left: 413px;
    top: 143px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(138, 142, 148, 0.05);
    border-radius: 10px;
}
.top{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    width: 388px;
    height: 85px;
}
.top h3{
    width: 209px;
    height: 32px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #282828;
}
.top p{
    width: 388px;
    height: 48px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #949CA9;
}
.medium{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 390px;
    height: 203px;
    background: #B3B3B3;
    border: 1px solid #000000;
}
.medium p{
    width: 280px;
    height: 88px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
}
.inputdata{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 388px;
    height: 201px;
}
.inputdata a{
    width: 265px;
    height: 22px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #3066BE;
}
.button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 49px;
    gap: 10px;
    width: 390px;
    height: 52px;
    background: #3066BE;
    border-radius: 6px;
}
.itext{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 8px;
    width: 390px;
    height: 52px;
    background: #FFFFFF;
    border: 1px solid #E8E9EA;
    border-radius: 6px;
}
</style>