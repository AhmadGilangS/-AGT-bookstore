import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QFooter,
  QParallax,
  QPageScroller,
  QAvatar,
  QColor,
  Notify,
  QToggle,
  QInput,
  QForm,
  QBreadcrumbs,
  QBreadcrumbsEl,
  QSpace,
  QCarousel,
  QCarouselSlide,
  QCarouselControl
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QFooter,
    QParallax,
    QPageScroller,
    QAvatar,
    QColor,
    QToggle,
    QInput,
    QForm,
    QBreadcrumbs,
    QBreadcrumbsEl,
    QSpace,
    QCarousel,
    QCarouselSlide,
  QCarouselControl
  },
  directives: {
  },
  plugins: {
    Notify
  }
 })