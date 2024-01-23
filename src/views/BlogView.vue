<template>
    <div class="body">
        <h2>Inside Open Art</h2>
        <div class="container">
            <div>
                <!-- <p><i class="fa-brands fa-figma"></i></p> -->
                <p>4pt grid system</p>
                <p>Base on 4pt gird system. Our UI KIT help you crate perfect white space</p>
            </div>
            <div>
                <!-- <p><i class="fa-solid fa-pen"></i></p> -->
                <p>4pt grid system</p>
                <p>Base on 4pt gird system. Our UI KIT help you crate perfect white space</p>
            </div>
            <div>
                <!-- <p><i class="fa-brands fa-autoprefixer"></i></i></p> -->
                <p>4pt grid system</p>
                <p>Base on 4pt gird system. Our UI KIT help you crate perfect white space</p>
            </div>
            <div>
                <!-- <p><i class="fa-solid fa-circle-dot"></i></i></p> -->
                <p>4pt grid system</p>
                <p>Base on 4pt gird system. Our UI KIT help you crate perfect white space</p>
            </div>
            <div>
                <!-- <p><i class="fa-solid fa-envelope"></i></i></p> -->
                <p>4pt grid system</p>
                <p>Base on 4pt gird system. Our UI KIT help you crate perfect white space</p>
            </div>
            <div>
                <!-- <p><i class="fa-solid fa-star"></i></i></p> -->
                <p>4pt grid system</p>
                <p>Base on 4pt gird system. Our UI KIT help you crate perfect white space</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-shadow: 0;
}

.body {
    background-image: url('../assets/3.png');
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2{
    margin-top: 90px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
}
.container >div{
    width: 300px;
    background-color: white;
    height: auto;
    margin: 10px;
    color: black;
    border-radius: 5px;
    padding: 20px;
}
.container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
}
.container >div p{
    margin: 10px;
}

.container >div p:last-child{
    opacity: 0.5;
}
</style>