// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/global.css')

import DefaultLayout from '@/layouts/Default.vue'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('SiteHeader', SiteHeader)
  Vue.component('SiteFooter', SiteFooter)
    // Add attributes to BODY tag
  head.bodyAttrs = { class: 'bg-primary'}

  // Set default layout as a global component

}
