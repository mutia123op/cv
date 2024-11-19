import { Card } from "flowbite-react";
import picture from '../assets/img/Profile.png';

export const Profile = () => {
    return (
        <Card className="max-w-full dark:bg-white">
            <section id="profile" class="profile container mt-2 md:mt-5" >
                <div class="flex flex-col-reverse md:flex-row items-center">
                    <div class="w-full md:w-2/3 order-2 md:order-1">
                        <h3 class="font-semibold text-3x1">Halooo aku</h3>
                        <h1 class="font-bold text-3xl nama">Muhaharat.annisya</h1>
                        <p>aku adalah Programmer</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Contact:</p>
                        <p>No:+62 831-0047-0168</p>
                        <p>Email:muthaharata@gmail.com</p>
                        <p>Alamat:Jalan Moh Toha, RT.7/RW.6, Ciburuy, Regol,Kota Bandung, Jawa barat</p>
                    </div>
                    <div class="w-full md:w-1/3 order-1 md:order-2 flex justify-center md:justify-end">
                        <img  src={picture} alt="Potrait" class="max-w-full rounded-full"/>
                    </div>
                </div>
            </section>
            <Card href="Tentang saya" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             Tentang saya
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Saya adalah seorang siswa SMK Prakarya Internasional dengan jurusan Software Engineer. Saat ini, saya sedang fokus mempelajari React dan PHP untuk memperkuat kemampuan saya dalam pengembangan aplikasi web. Selain itu, saya juga mendalami bidang UI/UX karena saya percaya bahwa pengalaman pengguna yang baik adalah kunci dalam menciptakan produk digital yang sukses. 
            </p>
            </Card>
        </Card>
    )
}

  
  