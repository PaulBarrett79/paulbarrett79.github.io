<template>
    <div class="flex flex-col ">
        <div class="post-thumb-img">
            <slot name="thumb" />
        </div>
        <div class="post-thumb-text">
            <h2><slot name="title"/></h2>
            <h3><slot name="subtitle" /></h3>
        </div>
    </div>
</template>

<style lang="scss">
.post-thumb-text {
    background: #030C3F;
    padding: 20px;
    transform: translateY(-90px);
    transition: all 0.2s ease-out;
    &:hover {
        background: #03607C;
    }
}
</style>