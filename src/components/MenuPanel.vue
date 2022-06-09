<template>
    <div class="MenuPanel">
        <div
            class="Menu__panel"
            :style="[
                functionalityStyle,
                positionStyle,
                isTranslating ? transitionStyle : {},
            ]"
        >
            <div
                v-if="list.name"
                @click="handleHeaderClicked"
                class="Menu__header"
            >
                <span v-show="showHeaderArrow" class="arrow">
                    <LeftArrowIcon />
                </span>
                {{ list.name }}
            </div>

            <ul class="Menu__list">
                <li v-for="item in list.children" class="Menu__item">
                    <template v-if="item.children.length > 0" :href="item.link">
                        <a :href="item.link">
                            <div class="text">{{ item.name }}</div></a
                        >
                        <span class="arrow" @click="handleItemClicked(item)">
                            <RightArrowIcon />
                        </span>
                    </template>
                    <a v-else :href="item.link">
                        <div class="text">{{ item.name }}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import RightArrowIcon from "../icons/RightArrowIcon.vue";
import LeftArrowIcon from "../icons/LeftArrowIcon.vue";

export default {
    components: {
        RightArrowIcon,
        LeftArrowIcon,
    },
    props: {
        list: {
            type: Object,
            required: true,
        },
        positionStyle: {
            type: Object,
            required: true,
        },
        showHeaderArrow: {
            type: Boolean,
            default: false,
        },
        isTranslating: {
            type: Boolean,
            default: false,
        },
        handleHeaderClicked: {
            type: Function,
            default: () => {},
        },
        handleItemClicked: {
            type: Function,
            default: () => {
                alert("hi");
            },
        },

        // @TODO: create createMenuPanel.js to assign `functionalityStyle` which is not diff from next, staging, and prev panel in parent component.
        functionalityStyle: {
            type: Object,
            required: true,
        },
        transitionStyle: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
ul,
li {
    padding: 0;
    margin: 0;
}

.Menu__header {
    display: flex;
    align-items: center;
    padding-left: 35px;
    height: 50px;
    color: #fff;
    font-size: 16px;
    background-color: #232f3e;
    cursor: pointer;

    .arrow {
        padding-top: 2px;
        fill: #fff;
        margin-right: 10px;
        width: 10px;
        height: 100%;
        display: flex;
        align-items: center;
    }
}

.Menu__list {
    list-style: none;
    padding-bottom: 2px;

    .separator {
        border-bottom: 1px solid #d5dbdb;
        padding: 2px 0 0 0;
        margin: 0;
    }
}

.Menu__item {
    color: #4a4a4a;
    padding-left: 35px;
    height: 45px;
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
        color: #4a4a4a;
        text-decoration: none;
    }

    .arrow {
        padding-top: 2px;
        padding-left: 15px;
        display: flex;
        align-items: center;
        width: 10px;
        height: 100%;
    }
}
</style>
