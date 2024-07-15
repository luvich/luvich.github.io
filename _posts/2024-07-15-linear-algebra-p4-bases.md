---
layout: post
title: "Đại số tuyến tính (P4): Cơ sở"
author: "Luvich"
categories: 
  - mathematics
  - algebra
  - linear-algebra
tags: [linear algebra, mathematics, đại số tuyến tính, vector, độc lập tuyến tính,linear independent, cơ sở, basic, bases, span, linear span, linear hull]
image: vector_cover.svg.png
toc: true
toc_label: "Table of Contents"
toc_icon: "icon"
---

<span style="font-size: 20pt; font-weight: bold; color: #2F2A85;">Mục lục</span>

* toc
{:toc}


# Giới thiệu
<a href="https://luvich.github.io/linear-algebra-p3-span" style="color: blue;">Phần 3</a> giới thiệu về span. Có một tập $S$ cho trước, phép toán $\operatorname{span}(S)$ mở rộng tập hợp này. Vậy ngược lại, cho trước một tập hợp, một không gian $T$ nào đó, thì tập nào sẽ span ra $T$. Một tập hợp như vậy có tính chất gì đặc biệt?

Trước hết chúng ta sẽ quan tâm đến một tập hợp $B$ mà $\operatorname{span}(B) = V$, tức là mở rộng của nó là toàn bộ không gian vector $V$. Tập hợp $B$ như thế ta gọi là một *hệ sinh* của $V$:

Một hệ các vector của $V$ được gọi là một <span style="font-weight: bold; color: #FF6E40;">hệ sinh</span> của $V$ nếu mọi vector trong $V$ đều có thể biểu diễn tuyến tính qua hệ này.

Nếu $B$ là một hệ sinh của $V$ thì $\operatorname{span}(B)=V$. Lưu ý rằng biểu diễn tuyến tính của vector nào đó qua hệ sinh có thể không duy nhất.

Một hệ các vector của $V$ được gọi là một <span style="font-weight: bold; color: #FF6E40;">hệ sinh</span> của $V$ nếu mọi vector trong $V$ đều có thể biểu diễn tuyến tính qua hệ này.

<div style="
    border: 2px solid #4CAF50;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
    margin: 20px 0;
">
  <h2 style="color: #4CAF50;">Tiêu đề của khung viền</h2>
  <p>Đây là văn bản trong khung viền. Bạn có thể thêm bất kỳ nội dung nào bạn muốn ở đây.</p>
</div>
