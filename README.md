## Feladat

- Készíts egy komponenst, iterálj végig rajta, és formázd meg úgy a színeket, hogy mindegyik szín mellé az előző indexű szín kerüljön, tehát például (yellow red) (pipes)
- Ebben a komponensben hozz létre egy lokális referenciát a színeket tartalmazó elemekből, írasd ki konzolba
- Hozz létre egy új komponenst, amelyben feliratkozol egy observable-re, megjeleníted a tartalmát async pipe nélkül, és leiratkozol róla a hagyományos módon
- Ezen az observable-n belül késleltesd a feliratkozást 5 másodperccel, és szűrd ki a 'green' színt.
- Hozz létre egy másik observablet, és irakozz fel rá async pipe-pal
- Hozz létre egy input eventet, és a keydown eventet késleltesd öt másodperccel
- Hozz létre egy új komponenst, amelyben végigmegyünk a color tömb egy elemén másodpercenként és mindig az aktuális elemet adjuk át egy subjectnek, majd egy behaviour subjectnek
- Hozz létre egy komponenst, amelyben létrehozol három feliratkozást egy replaysubjecttel, és visszaadod feliratkozásonként az utolsó öt értéket, az nem gond, ha közben a korábbi felirakozások is kapnak új értéket.