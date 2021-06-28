<template>
    <div id="app" class="bg-primary">
        <SiteHeader/>
        <slot/>
        <site-footer></site-footer>
    </div>
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>


<style>
</style>
