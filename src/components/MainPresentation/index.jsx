import React from 'react'
import "./MainPresentation.css"

const MainPresentation = () => {
  return (
    <section className='MainPresentation'>
        <div className='MainPresentation__gallery'>
            <aside className='MainPresentation__gallery__aside'>
                <span className='MainPresentation__gallery__link'>taste gallery</span>
                <span className='MainPresentation__gallery__addon'></span>
            </aside>
            <img
              className='MainPresentation__gallery__image'
              src={require("../../assets/images/fallon-travels.jpg")}
              alt="Restaurant image"
            />
        </div>
        <article className='MainPresentation__contact-info-container'>
          <section className='MainPresentation__social-media-container'>
            <svg className='MainPresentation__social-media-container__svg' xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
              <path d="M2345 5033 c-828 -72 -1558 -547 -1962 -1278 -327 -591 -396 -1317 -187 -1977 121 -380 324 -710 619 -1004 292 -290 636 -492 1035 -608 115 -33 298 -75 328 -76 9 0 12 185 12 890 l0 890 -280 0 -280 0 0 350 0 350 279 0 279 0 5 353 c5 383 12 446 71 602 103 272 327 453 648 522 111 24 424 24 628 -1 80 -9 155 -20 168 -23 l22 -5 0 -303 0 -303 -272 -4 c-245 -4 -280 -7 -338 -26 -109 -36 -178 -111 -214 -231 -13 -44 -16 -105 -16 -318 l0 -263 365 0 c362 0 365 0 365 -21 0 -11 -22 -164 -50 -339 -27 -175 -50 -324 -50 -329 0 -8 -79 -11 -245 -11 l-245 0 0 -890 c0 -734 2 -890 13 -890 8 0 70 15 139 34 395 109 766 321 1067 611 424 408 675 903 758 1495 25 185 23 500 -6 688 -82 541 -318 1009 -701 1393 -410 411 -896 647 -1470 713 -121 14 -373 19 -485 9z"/>
              </g>
            </svg>
            <svg className='MainPresentation__social-media-container__svg' version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M1220 5105 c-628 -87 -1121 -584 -1206 -1215 -20 -155 -20 -2505 0 -2660 42 -312 180 -592 402 -814 221 -221 502 -360 814 -402 155 -20 2505 -20 2660 0 636 86 1130 580 1216 1216 20 155 20 2505 0 2660 -86 636 -580 1130 -1216 1216 -148 19 -2526 19 -2670 -1z m2562 -445 c244 -23 445 -118 609 -287 160 -165 246 -354 269 -591 13 -144 13 -2300 0 -2444 -23 -237 -109 -426 -269 -591 -164 -169 -365 -264 -609 -287 -144 -13 -2300 -13 -2444 0 -244 23 -445 118 -609 287 -160 165 -246 354 -269 591 -13 144 -13 2300 0 2444 23 244 118 445 287 609 159 155 356 247 573 268 127 12 2333 13 2462 1z"/>
                <path d="M3813 4239 c-75 -29 -144 -95 -178 -171 -97 -212 50 -453 284 -466 113 -6 228 51 290 145 41 61 55 113 54 196 -2 222 -238 378 -450 296z"/>
                <path d="M2380 3865 c-290 -41 -542 -167 -750 -375 -224 -223 -348 -488 -381 -813 -33 -311 66 -658 260 -912 58 -77 179 -198 256 -256 254 -194 601 -293 913 -260 324 33 589 157 812 381 224 223 348 488 381 812 27 257 -35 543 -168 773 -268 466 -793 724 -1323 650z m380 -465 c311 -75 565 -329 640 -640 27 -116 27 -284 0 -400 -59 -248 -233 -463 -463 -575 -126 -61 -233 -85 -377 -85 -144 0 -251 24 -377 85 -230 112 -404 327 -463 575 -27 116 -27 284 0 400 74 308 327 564 635 639 112 28 291 28 405 1z"/>
                </g>
            </svg>
            <svg className='MainPresentation__social-media-container__svg MainPresentation__social-media-container__svg--email' version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
              <path d="M839 3982 c-121 -32 -224 -111 -293 -225 -68 -114 -66 -84 -66 -1197 0 -1113 -2 -1083 66 -1197 69 -114 172 -193 293 -225 61 -16 189 -17 1713 -17 1175 -1 1662 2 1700 10 184 39 337 192 378 379 6 28 10 424 10 1050 0 1097 1 1075 -58 1184 -63 118 -204 222 -331 246 -35 6 -637 10 -1700 9 -1523 0 -1651 -1 -1712 -17z m3171 -325 c-14 -13 -346 -290 -738 -616 l-712 -593 -718 597 c-394 329 -726 606 -737 616 -19 19 14 19 1455 19 l1475 0 -25 -23z m-2664 -613 c294 -246 532 -450 527 -454 -4 -4 -237 -211 -518 -460 -280 -249 -520 -462 -532 -473 l-23 -20 0 926 c0 510 2 927 5 927 3 0 246 -201 541 -446z m2972 -938 l-3 -465 -535 476 c-294 261 -536 476 -538 478 -2 1 239 204 535 450 l538 447 3 -460 c1 -253 1 -670 0 -926z m-2025 148 c181 -152 228 -180 291 -170 47 8 60 17 258 183 l148 124 531 -473 532 -473 -746 -3 c-411 -1 -1083 -1 -1494 0 l-746 3 529 472 c291 259 530 472 532 472 1 1 76 -60 165 -135z"/>
              </g>
            </svg>
          </section>
          <section className='MainPresentation__contacts-container'>
            <aside className='MainPresentation__contacts-container__info'>
                <span className='MainPresentation__contacts-container__link'>contacts</span>
                <span className='MainPresentation__contacts-container__addon'></span>
            </aside>
          </section>
        </article>
        <div className='MainPresentation__main-description'>
          <h1 className='MainPresentation__main-description__title'>La Regina</h1>
          <p className='MainPresentation__main-description__subtitle'>A taste of Italy on your table <br /> every day</p>
        </div>
    </section>
  )
}

export default MainPresentation