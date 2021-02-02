import {ref, onMounted, onUnmounted, reactive, toRefs} from 'vue';

export function mousePositionRef(){
    const x = ref(0); //ref() works well for primative types
    const y = ref(0);

    function update(e) {
        x.value = e.pageX;
        y.value = e.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove', update);
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', update);
    });

    return {x, y};
}

export function mousePositionReactive(){
    const pos = reactive({
        x: 0, //reactive() works well for complex object types
        y: 0
    });

    function update(e) {
        pos.x = e.pageX;
        pos.y = e.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove', update);
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', update);
    });
    return {pos}; //<--- this is passed back, but properties aren't reactive when the object is destructured. see below function to see how to make reactive.
}

export function reactiveDestructure(){
    const pos = reactive({
        pX: 0, //reactive() works well for complex object types
        pY: 0
    });

    function update(e) {
        pos.pX = e.pageX;
        pos.pY = e.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove', update);
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', update);
    });

    return toRefs(pos); //<-- a way to make properties reactive when destructured
}