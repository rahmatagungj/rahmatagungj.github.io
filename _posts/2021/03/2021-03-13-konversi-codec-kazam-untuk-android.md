---
layout: post
author: Rahmat Agung Julians
image: codec
comments: false
title: Konversi Codec Kazam Untuk Android
description: Merubah codec dari video kazam
keywords: codec, kazam, screenrecorder
---

Merubah codec menjadi 48K, lakukan :

```bash
ffmpeg -y -i input_file.mp4 -c:v libx264 -c:a aac -strict experimental -tune fastdecode -pix_fmt yuv420p -b:a 192k -ar 48000 output_file.mp4
```

> Ubah input_file.mp4 dengan nama file video yang akan diubah.

> Ubah output_file.mp4 dengan nama hasil conversi

Hal in dilakukan untuk merubah format komputer pada android, perekam layar kazam hanya dapat membuat video pada 44khz.

Maka langkah yang dilakukan untuk membuat video dapat diputar pada media lainnya seperti android yaitu dengan merubah formatnya.

<h3 class="title-referensi"><b>Referensi</b></h3> 
--- 
<ol class="referensi">
    <li>
        <a href="https://video.stackexchange.com/questions/20162/convert-kazam-video-file-to-a-file-playable-in-windows-media-player">video.stackexchange.com/questions/20162</a>
    </li>
</ol>
