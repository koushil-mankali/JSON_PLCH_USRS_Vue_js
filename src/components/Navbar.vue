<script lang="ts">
    export default {
        name: "Navbar",
    }
</script>

<template>
    <nav>
        <div class="ttl">JSON PLCH USRS Vue js</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
</template>

<style>
nav{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fcbf49;
    color: #219ebc;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
}

.ttl{
    cursor: pointer;
}

ul{
    display: flex;  
}

ul li{
    margin: 1rem;
    list-style: none;
    cursor: pointer;
}
</style>