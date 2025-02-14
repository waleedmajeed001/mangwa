
import Allcarater from '@/components/Allcarater'
import WeeklyManga from '@/components/catagries'
import GenerManga from '@/components/ganer'
import Hero from '@/components/Hero'
import NewManga from '@/components/new'
import TrendingThrillers from '@/components/Trending'

const page = () => {
  return (
    <div>
        <Hero />
        <WeeklyManga />
        <NewManga />
        <GenerManga />
        <TrendingThrillers />
        <Allcarater />
    </div>
  )
}

export default page
