
import { Canvas } from '@react-three/fiber'
import { useState, Suspense, useEffect, useRef } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/Sky'
import Bird from '../models/bird'
import Plane from '../models/plane'
import HomeInfo from '../components/HomeInfo'


import sakura from '../assets/music.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {

    const audioRef = useRef(new Audio(sakura));
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    const [isplayingmusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isplayingmusic) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
        }
    }, [isplayingmusic])

    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)



    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let islandrotation = [0.1, 4.7, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43];
        }
        else {
            screenScale = [1, 1, 1];
            screenPosition = [0, -6.5, -43];
        }

        return [screenScale, screenPosition, islandrotation]
    }

    const adjustPlaneForScreenSize = () => {
        let planeScale = null;
        let planePosition = [0, -1.5, 0];

        if (window.innerWidth < 768) {
            planeScale = [0.04,0.04,0.04];
            planePosition = [0, -2.5, 0];
        }
        else {
            planeScale = [0.1, 0.1, 0.1];
            planePosition = [0, -4.5, -3.5];
        }

        return [planeScale, planePosition]
    }

    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    const [islandScale, islandPosition, islandrotation] = adjustIslandForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

                    <Bird />
                    <Sky isRotating={isRotating} />

                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandrotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        scale={planeScale}
                        position={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 9.5, 0]}

                    />
                </Suspense>
            </Canvas>
            <div className='absolute bottom-2 left-2'>
                <img className='w-10 h-10 cursor-pointer object-contain'
                    onClick={() => setIsPlayingMusic(!isplayingmusic)}
                    src={!isplayingmusic ? soundoff : soundon} alt="" />
            </div>
        </section>
    )
}

export default Home
