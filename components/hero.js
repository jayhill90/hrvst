import { SocialIcon } from "react-social-icons";

export default function Hero() {
    return (
        <div class="relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundPosition: '50%', backgroundImage: `url(/Banner.13.png)`, height: 600 + 'px', opactiy: '50' + '%' }}>
        <div class="flex h-full flex-col items-center justify-center">
          <img class="mt-6 mb-6 pt-12 lg:px-14" src="/HRVST_WHITE_LOGO.png" alt="HRVST is a minimal bassline focused music producer." />
          <div class="flex flex-row items-center justify-between bg-black opacity-90">
            <h3 class="p-2 justify-self-center lg:text-3xl text-xl font-bold text-white">Underground Minimal Bassline Focused House &amp; Grage</h3>
          </div>
          <div class="flex-row">
              <SocialIcon url="spotify:artist:4laUZIDTrzWHmMQS1QGcIC" bgColor="#FFFFFF" fgColor="#000000" />
              <SocialIcon url="https://instagram.com/hrvst_music" bgColor='#FFFFFF' fgColor='#000000'/>
              <SocialIcon url="https://soundcloud.com/hrvstbeats" bgColor='#FFFFFF' fgColor='#000000' />
              <SocialIcon url="https://youtube.com/@hrvstmusic?sub_confirmation=1" bgColor="#FFFFFF" fgColor="#000000" />
              <SocialIcon url="https://twitter.com/_HRVST_" bgColor='#FFFFFF' fgColor='#000000'/>
              <SocialIcon url="https://tiktok.com/@hrvst_music" bgColor='#FFFFFF' fgColor='#000000' />
              <SocialIcon url="https://twitch.tv/hrvst_music" bgColor='#FFFFFF' fgColor='#000000'/>
            </div>
        </div>
      </div>
    )
}