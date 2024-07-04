import { MainBanner } from "../../widgets/banner"
import MainCategoryMenu from "../../widgets/navigator/category-menu"
import LastVisited from "../../widgets/last-visited"




function MainPage(): JSX.Element {
  return (
    <>
      <main>
        <MainBanner />
        <MainCategoryMenu />
        <LastVisited />
      </main>
    </>
  )
}




export default MainPage
