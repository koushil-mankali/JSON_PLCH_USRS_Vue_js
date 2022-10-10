import {ref, unref, isRef, watchEffect} from 'vue';

export default useFetch = (url) => {
    const data = ref(null);

    fetch(url).then(res => res.json()).then(res => console.log(res));

    return data;
};