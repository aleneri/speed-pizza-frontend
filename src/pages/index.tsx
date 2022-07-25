import Head from "next/head"
import Image from "next/image"
import logoImg from '../../public/logo.png'
import styles from  "../../styles/home.module.scss";
import { Input } from "../components/ui/Input";

export default function Home() {
  return (
    <>
      <Head>
        <title>Speed Pizza - Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Speed Pizza"></Image>
        <div className={styles.login}>
          <Input/>
        </div>
      </div>
    </>
  )
}
