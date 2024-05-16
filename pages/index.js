import style from './index.module.css';
import Link from 'next/link';

function HomePage() {
    return (
    <div className="hole">
    <style jsx global>{`
        *{padding:0;margin:0;box-sizing:border-box;}
          body{height:100%; background-color:indianred;}
          `}</style>

    <div className={style.header}>
    <style>@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Quicksand:wght@300;400;700&display=swap');</style>
        <h1>Larissa e Rodrigo</h1>
    </div>{/*header*/}

    <div className={style.callout}>
        <h2>Vamos Casar!</h2>
        <p>Vem fazer parte desse momento histórico!</p>
        </div>{/*callout*/}

    <div className={style.grid}>

        <div className={style.image1}></div>
        <div className={style.image2}></div>
        <div className={style.image3}></div>
        <div className={style.image4}></div>



    </div>{/*grid*/}
    

    <div className={style.presentation}>
        
    <h2 className={style.titles}>Sobre os noivos...</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a facilisis quam. Suspendisse a lobortis est. Donec molestie consequat dolor, 
            et varius magna accumsan in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vitae rutrum quam. 
            Proin gravida urna diam, in lobortis nulla viverra ac. Vivamus sit amet dapibus tellus. Sed pellentesque iaculis fringilla. Suspendisse sed 
            urna non quam elementum viverra ac ullamcorper magna. Phasellus lobortis felis ipsum. Maecenas in iaculis elit, quis finibus enim. Morbi egestas 
            ipsum ipsum, vel tempor enim consectetur at. Sed in elit orci. Morbi eu laoreet est. Praesent aliquam interdum tortor, sit amet pretium mi 
            iaculis rutrum. Nullam viverra turpis eu est placerat, eu commodo mi molestie.Phasellus aliquet, ipsum ac aliquet dignissim, est neque efficitur 
            diam, non euismod massa lacus eu elit. Quisque luctus erat ut fringilla tincidunt. Orci varius natoque penatibus et magnis dis parturient 
            montes, nascetur ridiculus mus. Aliquam erat volutpat. Duis lobortis congue laoreet. Integer lacinia vestibulum velit vel pretium. Sed nunc 
            urna, sodales in pellentesque eu, vestibulum in libero. Vestibulum hendrerit nunc sed ligula imperdiet, eget imperdiet arcu vehicula. Donec 
        eu lobortis purus.</p>
    
    
    </div>{/*presentation*/}


        <div className={style.event}>
            
        <h2 className={style.titles}>Sobre o evento...</h2>

            <div className={style.wrapper}>
                <div className={style.box1}></div>{/*box1*/}
                <div className={style.box2}>
                    <p><span className={style.eventTitle}>Local: </span>Villa das Palmeiras</p>
                    <p><span className={style.eventTitle}>Data: </span>27.07.2024</p>
                    <p><span className={style.eventTitle}>Horário: </span>Cerimônia às 16:00</p>
                    <p><span className={style.eventTitle}>Dresscode: </span>Social/Formal</p>
                    <p><span className={style.eventTitle}>Local: </span>Villa das Palmeiras</p>

                        
                    <span><Link href="https://maps.app.goo.gl/nKWLXR41VoVbEf6T9" className={style.link}> Acesse a localização!</Link></span> 
                        
                    </div>{/*box2*/}
            </div>{/*wrapper*/}
            
        </div>{/*event*/}




        <div className={style.giftlist}>
            
            <div className={style.callout}>
                <h2>Lista de Presentes</h2>
                <p>Se você se sentir de nos dar algum presente, aqui estão algumas opções: </p>
            </div>{/*callout*/}

            <div className={style.boxWrapper}>
            
                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}

                <div className={style.item}>
                    <div className={style.imagemProduto}></div>
                    <h2>Título do Produto</h2>
                    <p>Descrição do Produto</p>    
                </div>{/*item*/}
            
            </div>{/*boxWrapper*/}

            <span><Link href="https://maps.app.goo.gl/nKWLXR41VoVbEf6T9" className={style.link}> Ver mais Opções!</Link></span>
        
        </div>{/*giftlist*/}


        <div className={style.confirmation}>
            
            <div className={style.textWrapper}>
            <h1>Para participar deste momento especial...</h1>
            <p>é <b>MUITO</b> importante que você confime sua presença na data e hora correta. Por isso,
            não deixe de clicar no botão abaixo para confirmar sua presença e garantir o seu lugar na nossa celebração!</p>

            <form>
                <input type="text" placeholder='Seu Nome' name='nome'></input>
                <input type="email" placeholder="Seu Email" name='email'></input>
                <input type="phone" placeholder="Seu Número" name='numero'></input>

                <input type='submit' value='Confirmar Presença'></input>
            </form>
            </div>{/*textWrapper*/}

        </div>{/*confirmation*/}


        <div className={style.godparents}>
            
            <div className={style.callout}>
            <h2>Nossos Padrinhos!</h2>
            <p>Uma salva de palmas para aqueles que são tão importantes pra nós!</p>
            </div>{/*callout*/}


                <div className={style.container}>
                    
                    <div className={style.person}><h3>Giliardi e Carol</h3></div>{/*person*/}
                    <div className={style.person}><h3>Helton e Raquel</h3></div>{/*person*/}
                    <div className={style.person}><h3>Diego e Ingrid</h3></div>{/*person*/}
                    <div className={style.person}><h3>Nayara e Lucas</h3></div>{/*person*/}
                    <div className={style.person}><h3>Camila e Gustavo</h3></div>{/*person*/}
                    <div className={style.person}><h3>Paulo e Brenda</h3></div>{/*person*/}
                    <div className={style.person}><h3>Lorrany e Douglas</h3></div>{/*person*/}
                    <div className={style.person}><h3>Netinho e Elsie</h3></div>{/*person*/}
                    <div className={style.person}><h3>Renan</h3></div>{/*person*/}
                    <div className={style.person}><h3>Carliane</h3></div>{/*person*/}
                    <div className={style.person}><h3>Cristian</h3></div>{/*person*/}
                    <div className={style.person}><h3>Gabriella</h3></div>{/*person*/}


                
                </div>{/*container*/}
        
        </div>{/*godparents*/}


        <div className={style.goodbyes}>
            
            <h2>Agradecemos o seu carinho e atenção...</h2>
            <p>e esperamos que você aproveite ao máximo conosco!</p>
        
        </div>{/*goodbyes*/}


        <div className={style.footer}>
        <p>All rights reserved® </p>
            <h5>gallipolidev.com</h5>
        
        </div>{/*footer*/}

    </div>
    )
 }
 
 export default HomePage