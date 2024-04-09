import { Suspense, useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { Canvas } from "@react-three/fiber";

import Fox from "../models/fox";
import Loader from "../components/Loader";
import useAlert from "../Hooks/useAlert";
import Alert from "../components/Alert";
import Footer from "../components/footer";
import CTA from "../components/CTA";


const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('Idle.2')

  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleFocus = () => setCurrentAnimation('Arranque');
  const handleBlur = () => setCurrentAnimation('Idle.2');
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentAnimation('SpawnClean')
    setIsLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ashif",
        from_email: form.email,
        to_mail: 'mohamedashif1911@gmail.com',
        message: form.message

      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);

      showAlert({ show: true, text: 'Message Sent Successfully!', type: 'success' })


      setTimeout(() => {
        setCurrentAnimation('Idle.2');
        hideAlert();
        setForm({ name: '', email: '', message: '' });
      }, [3000])

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Idle.2')
      console.log(error);
      showAlert({ show: true, text: 'I didnt get Your message', type: 'success' })

    })
  };

  const adjustPlaneForScreenSize = () => {
    let planeScale = null;
    let planePosition = [-1, -1.2, 0];

    if (window.innerWidth < 768) {
      planeScale = [1.1, 1.1, 1.1];
      planePosition = [0, -1.5, 0];
    }
    else {
      planeScale = [1.75, 1.75, 1.75];
      planePosition = [-1.8, -2, -3.5];
    }

    return [planeScale, planePosition]
  }

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <>
      <section className="relative flex lg:flex-row flex-col-reverse max-container">
        {alert.show && <Alert {...alert} />}

        <div className="lg:w-1/2 w-full lg:h-suto md:h-[600px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000.
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.1} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={planePosition}
                rotation={[12.6, 0.7, 0]}
                scale={planeScale}
              />




            </Suspense>
          </Canvas>

        </div>
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text blue-gradient_text">Send A Mail !</h1>
          <form
            onSubmit={handleSubmit}
            action="" className="w-full flex flex-col gap-8 mt-14">
            <label className="text-black-500 font-semibold">Name
              <input type="text" name="name" className="input" placeholder="Your Name" required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            </label>
            <label className="text-black-500 font-semibold">Email
              <input type="text" name="email" className="input" placeholder="Your Email" required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            </label>
            <label className="text-black-500 font-semibold">Message For Me
              <textarea name="message" rows={4} className="input" placeholder="Let Me Know what You think!" required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            </label>
            <button type="submit" className="btn"
              disabled={isLoading}
              onFocus={handleFocus} onBlur={handleBlur}>
              {isLoading ? 'Passing...' : 'Pass the Message!'}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
