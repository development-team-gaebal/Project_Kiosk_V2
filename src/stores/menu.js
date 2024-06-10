import {ref, reactive} from "vue";
import {defineStore} from "pinia";
import {useRouter} from "vue-router";
import menuData from "@/test_db/menuData.json";

export const useMenuStore = defineStore("menu",()=>{
    const router = useRouter();
    const menus = ref([{}]);
    const menuView = reactive({});
        // name:"",
        // img:"",
        // price:""
});

// add, remove, clean