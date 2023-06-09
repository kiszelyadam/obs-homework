## Feladat

- Készíts egy komponenst, iterálj végig rajta<sup>1</sup>, és formázd meg úgy a színeket, hogy mindegyik szín mellé az előző indexű szín kerüljön, tehát például (yellow red) (pipes)
- Hozz létre külön egy html elemet, és jelenítsd meg benne a color tömb első elemét.
- Ebben a komponensben készíts lokális referenciát, amely az önálló html elemre mutat, és írasd ki konzolba.
- Ebbent a komponensben változtasd meg a végigiterált tömbnek <sup>1</sup> az utolsó előtti elemét olyan színre, ami a neve (itt viewchildren-t kell
    használni, erről nem volt szó, de jó ha tudsz róla: https://stackoverflow.com/questions/51252429/angular-viewchild-for-dynamic-elements-inside-ngfor, ha bármi kérdés van írj.)
- Hozz létre egy új komponenst, amelyben feliratkozol egy observable-re, megjeleníted a tartalmát async pipe nélkül, és leiratkozol róla a hagyományos módon.
- Ezen az observable-n belül késleltesd a feliratkozást 5 másodperccel, és szűrd ki a 'green' színt (delay, map).
- Hozz létre egy másik observablet, és irakozz fel rá async pipe-pal.
- Hozz létre egy input eventet, és a keydown eventet késleltesd öt másodperccel.
- Hozz létre egy új komponenst, amelyben végigmegyünk a color tömb egy elemén másodpercenként és mindig az aktuális elemet adjuk át egy subjectnek, majd egy behaviour subjectnek.
- Hozz létre egy komponenst, amelyben létrehozol három feliratkozást egy replaysubjecttel, és visszaadod feliratkozásonként az utolsó öt értéket, az nem gond, ha közben a korábbi felirakozások is kapnak új értéket.