---
layout: post
author: Rahmat Agung Julians
image: java
comments: false
featured: true
title: Cetak Hello World tanpa Semicolon pada Java
description: Soal interview mengenai java dan semicolon
keywords: interview, jawaban, java, programming, semicolon
---

## Permasalahan

Buatlah pernyataan untuk mencetak "Hello Word" menggunakan java, setiap pernyataan tidak diperbolehkan menggunakan semicolon atau simbol ";".

## Diskusi (Perlu diketahui)

Setiap pernyataan pada bahasa pemrograman java harus diakhiri oleh simbol semicolon, jika simbol tersebut tidak ada maka program akan dinyatakan error.

## Penyelesaian Masalah

Permasalahan dapat diselesaikan menggunakan beberapa metode yang pastinya tidak menggunakan pernyataan seperti biasanya, namun cara ini berhasil membuat program berjalan tanpa menggunakan semicolon.

```java
public class HelloWorld{

     public static void main(String []args){

        // CARA YANG PERTAMA
        if( System.out.printf("Hello World\n") == null) {}

        // CARA YANG KEDUA
        if( System.out.append("Hello World\n") == null) {}

        // CARA YANG KE TIGA
        if( System.out.append("Hello World\n").equals(null)) {}

        // CARA YANG KE EMPAT
        for (int i=0;i<1;System.out.append("Hello World\n")) {i++;}
     }
}
```

<h3 class="title-referensi"><b>Referensi</b></h3> 
--- 
<ol class="referensi">
    <li>
        <a href="https://www.java.com/">https://www.java.com</a>
    </li>
</ol>
