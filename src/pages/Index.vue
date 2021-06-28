<template>
        <Layout>
        <section class="py-8">
            <div style="max-width: 600px;" class="container">
                <figure class="w-20 mx-auto mb-5">
                    <g-image class="rounded-full w-full" src="~/assets/images/aaron.jpg" width="90" alt="author"/>
                </figure>
                <article class="text-white text-center">
                    <h1 class="mb-5 text-3xl">
                        Aaron Jack makes stuff.
                    </h1>
                    <p class="mb-5">
                        A blog about learning, business and web development technologies.
                    </p>
<!--                    <ul class="flex gap-4 justify-center text-link underline mb-4">-->
<!--                        <li>-->
<!--                            <a href="">-->
<!--                                Follow on Twitter-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <a href="">-->
<!--                                GitHub-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->
                </article>
            </div>
        </section>
        <section class="">
            <div style="max-width: 860px;" class="container">
                <BlogListingSingle v-for="{ node } in $static.posts.edges" :key="node.id" />
            </div>
        </section>
    </Layout>
</template>

<static-query>
{
  posts {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
</static-query>


<script>
import BlogListingSingle from "../components/BlogListingSingle";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
    components: {
      BlogListingSingle,
    }
}
</script>

<style>
</style>
