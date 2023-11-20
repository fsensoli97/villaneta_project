import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import './PreviousEditions.css'
import { useState } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useContext } from "react";
import { ThemeContext } from "../../App";

import img1001 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-00.jpg'
import img1002 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-03.jpg'
import img1003 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-06 - Copia.jpg'
import img1004 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-06.jpg'
import img1005 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-07 - Copia.jpg'
import img1006 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-07.jpg'
import img1007 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-08 - Copia.jpg'
import img1008 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-17-51-08.jpg'
import img1009 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-54-57.jpg'
import img10010 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-55-57.jpg'
import img10011 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-56-02 - Copia.jpg'
import img10012 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-56-02.jpg'
import img10013 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-56-53.jpg'
import img10014 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-00 - Copia (2).jpg'
import img10015 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-00 - Copia.jpg'
import img10016 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-00.jpg'
import img10017 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-41.jpg'
import img10018 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-42.jpg'
import img10019 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-57-48.jpg'
import img10020 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-20 - Copia (2).jpg'
import img10021 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-20 - Copia.jpg'
import img10022 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-20.jpg'
import img10023 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-21 - Copia.jpg'
import img10024 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-21.jpg'
import img10025 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-22.jpg'
import img10026 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-58-23.jpg'
import img10027 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-08.jpg'
import img10028 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-14.jpg'
import img10029 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-15.jpg'
import img10030 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-49.jpg'
import img10031 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-52.jpg'
import img10032 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-53.jpg'
import img10033 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-18-59-54.jpg'
import img10034 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-16-20-40-19.jpg'
import img10035 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-51.jpg'
import img10036 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-52.jpg'
import img10037 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-53 - Copia (2).jpg'
import img10038 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-53 - Copia.jpg'
import img10039 from '../../gallery/previousEditions/firstEdition/PHOTO-2022-04-17-11-48-53.jpg'

import img2001 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (1).jpeg'
import img2002 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (2).jpeg'
import img2003 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (3).jpeg'
import img2004 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (4).jpeg'
import img2005 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (5).jpeg'
import img2006 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (6).jpeg'
import img2007 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (7).jpeg'
import img2008 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (8).jpeg'
import img2009 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02 (9).jpeg'
import img20010 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.02.jpeg'
import img20011 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (1).jpeg'
import img20012 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (2).jpeg'
import img20013 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (3).jpeg'
import img20014 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (4).jpeg'
import img20015 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (5).jpeg'
import img20016 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (6).jpeg'
import img20017 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03 (7).jpeg'
import img20018 from '../../gallery/previousEditions/secondEdition/WhatsApp Image 2023-09-24 at 23.53.03.jpeg'

import img3001 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (1).jpeg'
import img3002 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (2).jpeg'
import img3003 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (3).jpeg'
import img3004 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (4).jpeg'
import img3005 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07 (5).jpeg'
import img3006 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.07.jpeg'
import img3007 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (1).jpeg'
import img3008 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (2).jpeg'
import img3009 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (3).jpeg'
import img30010 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (4).jpeg'
import img30011 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (5).jpeg'
import img30012 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08 (6).jpeg'
import img30013 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.08.jpeg'
import img30014 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (1).jpeg'
import img30015 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (2).jpeg'
import img30016 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (3).jpeg'
import img30017 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (4).jpeg'
import img30018 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (5).jpeg'
import img30019 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (6).jpeg'
import img30020 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (7).jpeg'
import img30021 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (8).jpeg'
import img30022 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09 (9).jpeg'
import img30023 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.09.jpeg'
import img30024 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (1).jpeg'
import img30025 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (2).jpeg'
import img30026 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (3).jpeg'
import img30027 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (4).jpeg'
import img30028 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (5).jpeg'
import img30029 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10 (6).jpeg'
import img30030 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.10.jpeg'
import img30031 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (1).jpeg'
import img30032 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (10).jpeg'
import img30033 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (11).jpeg'
import img30034 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (2).jpeg'
import img30035 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (3).jpeg'
import img30036 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (4).jpeg'
import img30037 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (5).jpeg'
import img30038 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (6).jpeg'
import img30039 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (7).jpeg'
import img30040 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (8).jpeg'
import img30041 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11 (9).jpeg'
import img30042 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.11.jpeg'
import img30043 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (1).jpeg'
import img30044 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (10).jpeg'
import img30045 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (11).jpeg'
import img30046 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (2).jpeg'
import img30047 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (3).jpeg'
import img30048 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (4).jpeg'
import img30049 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (5).jpeg'
import img30050 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (6).jpeg'
import img30051 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (7).jpeg'
import img30052 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (8).jpeg'
import img30053 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12 (9).jpeg'
import img30054 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.12.jpeg'
import img30055 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (1).jpeg'
import img30056 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (10).jpeg'
import img30057 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (11).jpeg'
import img30058 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (2).jpeg'
import img30059 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (3).jpeg'
import img30060 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (4).jpeg'
import img30061 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (5).jpeg'
import img30062 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (6).jpeg'
import img30063 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (7).jpeg'
import img30064 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (8).jpeg'
import img30065 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13 (9).jpeg'
import img30066 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.13.jpeg'
import img30067 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (1).jpeg'
import img30068 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (2).jpeg'
import img30069 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (3).jpeg'
import img30070 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (4).jpeg'
import img30071 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (5).jpeg'
import img30072 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (6).jpeg'
import img30073 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14 (7).jpeg'
import img30074 from '../../gallery/previousEditions/thirdEdition/WhatsApp Image 2023-09-24 at 23.55.14.jpeg'

import img4001 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-18-21-51.jpg'
import img4002 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-24-31.jpg'
import img4003 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-25-33.jpg'
import img4004 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-25-35.jpg'
import img4005 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-25-58.jpg'
import img4006 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-05.jpg'
import img4007 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-06.jpg'
import img4008 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-07.jpg'
import img4009 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-08.jpg'
import img40010 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-09.jpg'
import img40011 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-26-12.jpg'
import img40012 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-36-11.jpg'
import img40013 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-20-36-12.jpg'
import img40014 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-21-48-19.jpg'
import img40015 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-21-48-35.jpg'
import img40016 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-21-48-38.jpg'
import img40017 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-15-21-48-49.jpg'
import img40018 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-16-21-29-30.jpg'
import img40019 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-16-21-29-31 - Copia (2).jpg'
import img40020 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-16-21-29-31 - Copia.jpg'
import img40021 from '../../gallery/previousEditions/fourthEdition/PHOTO-2023-08-16-21-29-31.jpg'

import img5001 from '../../gallery/previousEditions/fifthEdition/IMG-20231104-WA0011.jpg'
import img5002 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0015.jpg'
import img5003 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0016.jpg'
import img5004 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0017.jpg'
import img5005 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0018.jpg'
import img5006 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0019.jpg'
import img5007 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0020.jpg'
import img5008 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0021.jpg'
import img5009 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0022.jpg'
import img50010 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0023.jpg'
import img50011 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0024.jpg'
import img50012 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0025.jpg'
import img50013 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0026.jpg'
import img50014 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0027.jpg'
import img50015 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0028.jpg'
import img50016 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0029.jpg'
import img50017 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0030.jpg'
import img50018 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0031.jpg'
import img50019 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0032.jpg'
import img50020 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0033.jpg'
import img50021 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0034.jpg'
import img50022 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0036.jpg'
import img50023 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0037.jpg'
import img50024 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0038.jpg'
import img50025 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0039.jpg'
import img50026 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0040.jpg'
import img50027 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0041.jpg'
import img50028 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0042.jpg'
import img50029 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0043.jpg'
import img50030 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0044.jpg'
import img50031 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0045.jpg'
import img50032 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0046.jpg'
import img50033 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0047.jpg'
import img50034 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0048.jpg'
import img50035 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0049.jpg'
import img50036 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0050.jpg'
import img50037 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0051.jpg'
import img50038 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0052.jpg'
import img50039 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0053.jpg'
import img50040 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0054.jpg'
import img50041 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0055.jpg'
import img50042 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0056.jpg'
import img50043 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0057.jpg'
import img50044 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0058.jpg'
import img50045 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0059.jpg'
import img50046 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0060.jpg'
import img50047 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0063.jpg'
import img50048 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0067.jpg'
import img50049 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0069.jpg'
import img50050 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0071.jpg'
import img50051 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0073.jpg'
import img50052 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0075.jpg'
import img50053 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0076.jpg'
import img50054 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0077.jpg'
import img50055 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0079.jpg'
import img50056 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0081.jpg'
import img50057 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0082.jpg'
import img50058 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0083.jpg'
import img50059 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0084.jpg'
import img50060 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0085.jpg'
import img50061 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0086.jpg'
import img50062 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0087.jpg'
import img50063 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0088.jpg'
import img50064 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0089.jpg'
import img50065 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0090.jpg'
import img50066 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0091.jpg'
import img50067 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0092.jpg'
import img50068 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0093.jpg'
import img50069 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0094.jpg'
import img50070 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0095.jpg'
import img50071 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0096.jpg'
import img50072 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0097.jpg'
import img50073 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0098.jpg'
import img50074 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0099.jpg'
import img50075 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0101.jpg'
import img50076 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0102.jpg'
import img50077 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0104.jpg'
import img50078 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0105.jpg'
import img50079 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0106.jpg'
import img50080 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0107.jpg'
import img50081 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0108.jpg'
import img50082 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0109.jpg'
import img50083 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0110.jpg'
import img50084 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0111.jpg'
import img50085 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0112.jpg'
import img50086 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0113.jpg'
import img50087 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0114.jpg'
import img50088 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0115.jpg'
import img50089 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0116.jpg'
import img50090 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0117.jpg'
import img50091 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0118.jpg'
import img50092 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0119.jpg'
import img50093 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0120.jpg'
import img50094 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0121.jpg'
import img50095 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0122.jpg'
import img50096 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0123.jpg'
import img50097 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0124.jpg'
import img50098 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0125.jpg'
import img50099 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0126.jpg'
import img500100 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0127.jpg'
import img500101 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0128.jpg'
import img500102 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0129.jpg'
import img500103 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0130.jpg'
import img500104 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0131.jpg'
import img500105 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0132.jpg'
import img500106 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0133.jpg'
import img500107 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0134.jpg'
import img500108 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0135.jpg'
import img500109 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0136.jpg'
import img500110 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0137.jpg'
import img500111 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0138.jpg'
import img500112 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0139.jpg'
import img500113 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0140.jpg'
import img500114 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0141.jpg'
import img500115 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0142.jpg'
import img500116 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0143.jpg'
import img500117 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0144.jpg'
import img500118 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0145.jpg'
import img500119 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0146.jpg'
import img500120 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0147.jpg'
import img500121 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0148.jpg'
import img500122 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0149.jpg'
import img500123 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0150.jpg'
import img500124 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0151.jpg'
import img500125 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0152.jpg'
import img500126 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0153.jpg'
import img500127 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0154.jpg'
import img500128 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0155.jpg'
import img500129 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0156.jpg'
import img500130 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0157.jpg'
import img500131 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0158.jpg'
import img500132 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0159.jpg'
import img500133 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0160.jpg'
import img500134 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0161.jpg'
import img500135 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0162.jpg'
import img500136 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0163.jpg'
import img500137 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0164.jpg'
import img500138 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0165.jpg'
import img500139 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0166.jpg'
import img500140 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0167.jpg'
import img500141 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0172.jpg'
import img500142 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0179.jpg'
import img500143 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0180.jpg'
import img500144 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0181.jpg'
import img500145 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0182.jpg'
import img500146 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0183.jpg'
import img500147 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0184.jpg'
import img500148 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0187.jpg'
import img500149 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0188.jpg'
import img500150 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0189.jpg'
import img500151 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0190.jpg'
import img500152 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0192.jpg'
import img500153 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0194.jpg'
import img500154 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0195.jpg'
import img500155 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0196.jpg'
import img500156 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0197.jpg'
import img500157 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0198.jpg'
import img500158 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0199.jpg'
import img500159 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0200.jpg'
import img500160 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0201.jpg'
import img500161 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0202.jpg'
import img500162 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0207.jpg'
import img500163 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0217.jpg'
import img500164 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0218.jpg'
import img500165 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0219.jpg'
import img500166 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0220.jpg'
import img500167 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0221.jpg'
import img500168 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0222.jpg'
import img500169 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0225.jpg'
import img500170 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0226.jpg'
import img500171 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0227.jpg'
import img500172 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0228.jpg'
import img500173 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0229.jpg'
import img500174 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0230.jpg'
import img500175 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0231.jpg'
import img500176 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0232.jpg'
import img500177 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0241.jpg'
import img500178 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0243.jpg'
import img500179 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0246.jpg'
import img500180 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0247.jpg'
import img500181 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0248.jpg'
import img500182 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0249.jpg'
import img500183 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0250.jpg'
import img500184 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0251.jpg'
import img500185 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0257.jpg'
import img500186 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0260.jpg'
import img500187 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0261.jpg'
import img500188 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0262.jpg'
import img500189 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0263.jpg'
import img500190 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0265.jpg'
import img500191 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0266.jpg'
import img500192 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0267.jpg'
import img500193 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0268.jpg'
import img500194 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0269.jpg'
import img500195 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0270.jpg'
import img500196 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0271.jpg'
import img500197 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0272.jpg'
import img500198 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0273.jpg'
import img500199 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0277.jpg'
import img500200 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0278.jpg'
import img500201 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0279.jpg'
import img500202 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0280.jpg'
import img500203 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0284.jpg'
import img500204 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0285.jpg'
import img500205 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0286.jpg'
import img500206 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0287.jpg'
import img500207 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0288.jpg'
import img500208 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0289.jpg'
import img500209 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0290.jpg'
import img500210 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0291.jpg'
import img500211 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0292.jpg'
import img500212 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0293.jpg'
import img500213 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0294.jpg'
import img500214 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0295.jpg'
import img500215 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0296.jpg'
import img500216 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0297.jpg'
import img500217 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0298.jpg'
import img500218 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0299.jpg'
import img500219 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0300.jpg'
import img500220 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0301.jpg'
import img500221 from '../../gallery/previousEditions/fifthEdition/IMG-20231105-WA0303.jpg'
import img500222 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0007.jpg'
import img500223 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0008.jpg'
import img500224 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0009.jpg'
import img500225 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0010.jpg'
import img500226 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0011.jpg'
import img500227 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0012.jpg'
import img500228 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0013.jpg'
import img500229 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0014.jpg'
import img500230 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0015.jpg'
import img500231 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0016.jpg'
import img500232 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0017.jpg'
import img500233 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0018.jpg'
import img500234 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0019.jpg'
import img500235 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0020.jpg'
import img500236 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0021.jpg'
import img500237 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0022.jpg'
import img500238 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0023.jpg'
import img500239 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0024.jpg'
import img500240 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0025.jpg'
import img500241 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0026.jpg'
import img500242 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0027.jpg'
import img500243 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0028.jpg'
import img500244 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0029.jpg'
import img500245 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0030.jpg'
import img500246 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0031.jpg'
import img500247 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0032.jpg'
import img500248 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0033.jpg'
import img500249 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0034.jpg'
import img500250 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0035.jpg'
import img500251 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0036.jpg'
import img500252 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0037.jpg'
import img500253 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0038.jpg'
import img500254 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0039.jpg'
import img500255 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0040.jpg'
import img500256 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0041.jpg'
import img500257 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0042.jpg'
import img500258 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0043.jpg'
import img500259 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0045.jpg'
import img500260 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0048.jpg'
import img500261 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0056.jpg'
import img500262 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0057.jpg'
import img500263 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0058.jpg'
import img500264 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0060.jpg'
import img500265 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0063.jpg'
import img500266 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0064.jpg'
import img500267 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0070.jpg'
import img500268 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0072.jpg'
import img500269 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0073.jpg'
import img500270 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0074.jpg'
import img500271 from '../../gallery/previousEditions/fifthEdition/IMG-20231106-WA0075.jpg'

export default function PreviousEditions() {
    const [editions, setEditions] = useState([false, false, false, false, false]);
    const [currentImage, setCurrentImage] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const darkMode = useContext(ThemeContext);

    let edition1Pics = [
        img1001,
        img1002,
        img1003,
        img1004,
        img1005,
        img1006,
        img1007,
        img1008,
        img1009,
        img10010,
        img10011,
        img10012,
        img10013,
        img10014,
        img10015,
        img10016,
        img10017,
        img10018,
        img10019,
        img10020,
        img10021,
        img10022,
        img10023,
        img10024,
        img10025,
        img10026,
        img10027,
        img10028,
        img10029,
        img10030,
        img10031,
        img10032,
        img10033,
        img10034,
        img10035,
        img10036,
        img10037,
        img10038,
        img10039,
    ];

    let edition2Pics = [
        img2001,
        img2002,
        img2003,
        img2004,
        img2005,
        img2006,
        img2007,
        img2008,
        img2009,
        img20010,
        img20011,
        img20012,
        img20013,
        img20014,
        img20015,
        img20016,
        img20017,
        img20018,
    ];

    let edition3Pics = [
        img3001,
        img3002,
        img3003,
        img3004,
        img3005,
        img3006,
        img3007,
        img3008,
        img3009,
        img30010,
        img30011,
        img30012,
        img30013,
        img30014,
        img30015,
        img30016,
        img30017,
        img30018,
        img30019,
        img30020,
        img30021,
        img30022,
        img30023,
        img30024,
        img30025,
        img30026,
        img30027,
        img30028,
        img30029,
        img30030,
        img30031,
        img30032,
        img30033,
        img30034,
        img30035,
        img30036,
        img30037,
        img30038,
        img30039,
        img30040,
        img30041,
        img30042,
        img30043,
        img30044,
        img30045,
        img30046,
        img30047,
        img30048,
        img30049,
        img30050,
        img30051,
        img30052,
        img30053,
        img30054,
        img30055,
        img30056,
        img30057,
        img30058,
        img30059,
        img30060,
        img30061,
        img30062,
        img30063,
        img30064,
        img30065,
        img30066,
        img30067,
        img30068,
        img30069,
        img30070,
        img30071,
        img30072,
        img30073,
        img30074
    ];

    let edition4Pics = [
        img4001,
        img4002,
        img4003,
        img4004,
        img4005,
        img4006,
        img4007,
        img4008,
        img4009,
        img40010,
        img40011,
        img40012,
        img40013,
        img40014,
        img40015,
        img40016,
        img40017,
        img40018,
        img40019,
        img40020,
        img40021,
    ];

    let edition5Pics = [
        img5001,
img5002,
img5003,
img5004,
img5005,
img5006,
img5007,
img5008,
img5009,
img50010,
img50011,
img50012,
img50013,
img50014,
img50015,
img50016,
img50017,
img50018,
img50019,
img50020,
img50021,
img50022,
img50023,
img50024,
img50025,
img50026,
img50027,
img50028,
img50029,
img50030,
img50031,
img50032,
img50033,
img50034,
img50035,
img50036,
img50037,
img50038,
img50039,
img50040,
img50041,
img50042,
img50043,
img50044,
img50045,
img50046,
img50047,
img50048,
img50049,
img50050,
img50051,
img50052,
img50053,
img50054,
img50055,
img50056,
img50057,
img50058,
img50059,
img50060,
img50061,
img50062,
img50063,
img50064,
img50065,
img50066,
img50067,
img50068,
img50069,
img50070,
img50071,
img50072,
img50073,
img50074,
img50075,
img50076,
img50077,
img50078,
img50079,
img50080,
img50081,
img50082,
img50083,
img50084,
img50085,
img50086,
img50087,
img50088,
img50089,
img50090,
img50091,
img50092,
img50093,
img50094,
img50095,
img50096,
img50097,
img50098,
img50099,
img500100,
img500101,
img500102,
img500103,
img500104,
img500105,
img500106,
img500107,
img500108,
img500109,
img500110,
img500111,
img500112,
img500113,
img500114,
img500115,
img500116,
img500117,
img500118,
img500119,
img500120,
img500121,
img500122,
img500123,
img500124,
img500125,
img500126,
img500127,
img500128,
img500129,
img500130,
img500131,
img500132,
img500133,
img500134,
img500135,
img500136,
img500137,
img500138,
img500139,
img500140,
img500141,
img500142,
img500143,
img500144,
img500145,
img500146,
img500147,
img500148,
img500149,
img500150,
img500151,
img500152,
img500153,
img500154,
img500155,
img500156,
img500157,
img500158,
img500159,
img500160,
img500161,
img500162,
img500163,
img500164,
img500165,
img500166,
img500167,
img500168,
img500169,
img500170,
img500171,
img500172,
img500173,
img500174,
img500175,
img500176,
img500177,
img500178,
img500179,
img500180,
img500181,
img500182,
img500183,
img500184,
img500185,
img500186,
img500187,
img500188,
img500189,
img500190,
img500191,
img500192,
img500193,
img500194,
img500195,
img500196,
img500197,
img500198,
img500199,
img500200,
img500201,
img500202,
img500203,
img500204,
img500205,
img500206,
img500207,
img500208,
img500209,
img500210,
img500211,
img500212,
img500213,
img500214,
img500215,
img500216,
img500217,
img500218,
img500219,
img500220,
img500221,
img500222,
img500223,
img500224,
img500225,
img500226,
img500227,
img500228,
img500229,
img500230,
img500231,
img500232,
img500233,
img500234,
img500235,
img500236,
img500237,
img500238,
img500239,
img500240,
img500241,
img500242,
img500243,
img500244,
img500245,
img500246,
img500247,
img500248,
img500249,
img500250,
img500251,
img500252,
img500253,
img500254,
img500255,
img500256,
img500257,
img500258,
img500259,
img500260,
img500261,
img500262,
img500263,
img500264,
img500265,
img500266,
img500267,
img500268,
img500269,
img500270,
img500271
    ];

    const allPics = edition1Pics.concat(edition2Pics, edition3Pics, edition4Pics, edition5Pics);

    function handleClickImage(image) {
        setCurrentImage(image);
        setShowPopup(true);
    }

    edition1Pics = edition1Pics.map((el) => {
        return (
        <div className="imageContainer" onClick={() => handleClickImage(el)}>
            <img className="image" src={el} alt="example"></img>
        </div>
        );
    });

    edition2Pics = edition2Pics.map((el) => {
        return (
        <div className="imageContainer" onClick={() => handleClickImage(el)}>
            <img className="image" src={el} alt="example"></img>
        </div>
        );
    });

    edition3Pics = edition3Pics.map((el) => {
        return (
        <div className="imageContainer" onClick={() => handleClickImage(el)}>
            <img className="image" src={el} alt="example"></img>
        </div>
        );
    });

    edition4Pics = edition4Pics.map((el) => {
        return (
        <div className="imageContainer" onClick={() => handleClickImage(el)}>
            <img className="image" src={el} alt="example"></img>
        </div>
        );
    });

    edition5Pics = edition5Pics.map((el) => {
        return (
        <div className="imageContainer" onClick={() => handleClickImage(el)}>
            <img className="image" src={el} alt="example"></img>
        </div>
        );
    });

    function handleClickEdition(i) {
        let aux = [...editions];
        aux[i] = !aux[i];
        setEditions(aux);
    }

    function previousImage() {
        for (let i = 0; i < allPics.length; i++) {
            if (currentImage === allPics[i]) {
                if (i === 0) {
                    return setCurrentImage(allPics[allPics.length-1]);
                }
                else {
                    return setCurrentImage(allPics[i-1]);
                }     
            }
        }
    }

    function nextIimage() {
        for (let i = 0; i < allPics.length; i++) {
            if (currentImage === allPics[i]) {
                if (i === allPics.length - 1) {
                    return setCurrentImage(allPics[0]);
                }
                else {
                    return setCurrentImage(allPics[i+1]);
                }     
            }
        }
    }

    return(
        <>
            <HamburgerMenu></HamburgerMenu>
            <Logo></Logo>
            <div className="titleContainer">
                <div className="mainTitle" style={{color: darkMode ? "white" : "black"}}>
                    Previous editions
                </div>
            </div>
            <div className="editionLabel" onClick={() => handleClickEdition(0)} style={{color: darkMode ? "white" : "black"}}>
                First Edition
            </div>
            {editions[0] ?
            <div className="galleryRow">
                {edition1Pics}
            </div>
            : <></>
            }

            <div className="editionLabel" onClick={() => handleClickEdition(1)} style={{color: darkMode ? "white" : "black"}}>
                Second Edition
            </div>
            {editions[1] ? 
            <div className="galleryRow">
                {edition2Pics}
            </div>
            : <></>
            }    

            <div className="editionLabel" onClick={() => handleClickEdition(2)} style={{color: darkMode ? "white" : "black"}}>
                Third Edition
            </div>
            {editions[2] ? 
            <div className="galleryRow">
                {edition3Pics}
            </div>
            : <></>
            } 

            <div className="editionLabel" onClick={() => handleClickEdition(3)} style={{color: darkMode ? "white" : "black"}}>
                Third Edition Plus
            </div>
            {editions[3] ? 
            <div className="galleryRow">
                {edition4Pics}
            </div>
            : <></>
            }    

            <div className="editionLabel" onClick={() => handleClickEdition(4)} style={{color: darkMode ? "white" : "black"}}>
                Fourth Edition
            </div>
            {editions[4] ? 
            <div className="galleryRow">
                {edition5Pics}
            </div>
            : <></>
            }

            {showPopup ? 
            <ImagePopup image={currentImage} showPopup={setShowPopup} previous={previousImage} next={nextIimage}></ImagePopup>
            : <></>}
        </>
    );
}