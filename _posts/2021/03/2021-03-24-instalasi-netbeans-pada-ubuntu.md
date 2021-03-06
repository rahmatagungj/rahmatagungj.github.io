---
layout: post
author: Rahmat Agung Julians
image: java
comments: false
title: Instalasi Java Netbeans pada Ubuntu
description: Langkah untuk memasang netbeans menggunakan CLI
keywords: java, netbeans, cli
---

## Persiapan

### Update Repository

```bash
sudo apt-get update && apt-get upgrade
```

### Install JDK

```bash
sudo apt install openjdk-10-jdk
```

Jika versi JDK 10 tidak ada, gunakan salah satu dibawah ini.

```bash
sudo apt install openjdk-6-jdk
sudo apt install openjdk-7-jdk
sudo apt install openjdk-8-jdk
```

## Install Netbeans

```bash
sudo snap install netbeans --classic
```

<h3 class="title-referensi"><b>Referensi</b></h3> 
--- 
<ol class="referensi">
    <li>
        <a href="https://snapcraft.io/install/netbeans/ubuntu">https://snapcraft.io/install/netbeans/ubuntu</a>
    </li>
</ol>
