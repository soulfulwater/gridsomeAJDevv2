<template>
                <div class="relative bg-prmLight overflow-hidden rounded-md mb-8 sm:mb-16 shadow-sm duration-300 transform hover:-translate-y-1">
                    <a href="#" class="block absolute top-0 left-0 right-0 bottom-0 z-10"></a>
                    <figure class="">
                        <g-image class="w-full" src="~/assets/images/blog.jpg" alt="" />
                    </figure>
                    <article class="p-6 sm:py-14 sm:px-16 text-white">
                        <h4 class="text-3xl mb-4">
                            A post with a cover image
                        </h4>
                        <p class="opacity-80 mb-5">
                            Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions.
                        </p>
                        <p class="text-base opacity-60 mb-5">
                            Posted 7. January 2019. 1 min read.
                        </p>
                        <ul class="flex wrap gap-4 text-base">
                            <li class="bg-black bg-opacity-40 rounded-sm overflow-hidden">
                                <a href="" class="block sticky py-1 px-2 z-50 opacity-60">
                                    # Markdown
                                </a>
                            </li>
                            <li class="bg-black bg-opacity-40 rounded-sm overflow-hidden">
                                <a href="" class="block sticky py-1 px-2 z-50 opacity-60">
                                    # Cover Image
                                </a>
                            </li>
                        </ul>
                    </article>
                </div>
</template>

<script>
export default {
    name: "BlogListingSingle"
}
</script>

<style scoped>

</style>