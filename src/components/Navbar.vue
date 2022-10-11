<script lang="ts">
    export default {
        name: "Navbar",
    }
</script>

<template>
    <nav>
        <router-link to="/" class="ttl">JSON PLCH USRS Vue js</router-link>
        <ul>
            <li><router-link to="/" class="ttl">Home</router-link></li>
            <li><router-link to="/about" class="ttl">About</router-link></li>
            <li><router-link to="/contact" class="ttl">Contact</router-link></li>
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
    text-decoration: none;
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