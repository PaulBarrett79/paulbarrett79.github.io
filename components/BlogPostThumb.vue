<template>
    <div class="post-container flex flex-col">
        <div class="post-thumb-img align-stretch">
            <slot name="thumb" />
        </div>
        <div class="post-thumb-text aligns-stretch">
            <h2><slot name="title"/></h2>
            <h3 class="hidden md:flex"><slot name="subtitle" /></h3>
        </div>
    </div>
</template>

<style lang="scss">
.post-container {
    .post-thumb-text {
        background: #030C3F;
        padding: 20px;
        transform: translateY(-50px);
        transition: all 0.2s ease-out;
        h2, h3 {
            color: lightgray
        }
    }
    .post-thumb-img {
        opacity: 0.6;
        transition: all 0.2s ease-out;
    }
    &:hover {
        .post-thumb-text {
            background: #03607C;
            h2, h3 {
                color: unset;
            }
        }
        .post-thumb-img {
            opacity: 1;
        }
    }
}


</style>