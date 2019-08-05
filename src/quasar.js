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
  QCarouselControl,
  QTabPanels,
  QTabPanel,
  QTab,
  QTabs,
  QCard,
  QCardSection,
  QCardActions,
  QSeparator, 
  QBtnDropdown,
  QImg,
  ClosePopup
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
<<<<<<< HEAD
    QCarouselControl,
=======
  QCarouselControl,
>>>>>>> 221c7e3d132169de290095b788eb0cead54efa25
    QTabPanels,
    QTabPanel,
    QTab,
    QTabs,
    QCard,
    QCardSection,
    QCardActions,
    QSeparator, 
    QBtnDropdown,
    QImg
  },
  directives: {
    ClosePopup
  },
  plugins: {
    Notify
  }
 })