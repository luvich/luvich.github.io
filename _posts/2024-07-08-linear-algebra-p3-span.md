---
layout: post
title: "Đại số tuyến tính (P3): Mở rộng của một hệ vector"
author: "Luvich"
categories: 
  - mathematics
  - algebra
  - linear-algebra
tags: [linear algebra, mathematics, đại số tuyến tính, vector, độc lập tuyến tính,linear independent, cơ sở, basic, bases]
image: vector_cover.svg.png
toc: true
toc_label: "Table of Contents"
toc_icon: "icon"
---

<span style="font-size: 20pt; font-weight: bold; color: #2F2A85;">Mục lục</span>

* toc
{:toc}


# Giới thiệu
Hiện tại chưa biết dịch từ span này sang tiếng Việt là gì, tạm gọi là *"mở rộng"*.

Có một tập con $S$ (không nhất thiết hữu hạn) các vector của $V$. Một <span style="font-weight: bold; color: #FF6E40;">mở rộng / mở rộng tuyến tính / bao tuyến tính</span> (<i>span / linear sapn / linear hull</i>) của $S$ là giao của tất cả các không gian vector con của $V$ mà chứa $S$.

Khái niệm giao của một cái gì đó chứa một tập hợp cho trước rất thường gặp trong toán học, giống như bao affine, bao lồi, radical của ideal, ... Ở đây giao của các không gian vector con, nhớ lại rằng không gian vector con là không gian mà đóng kín đối với các phép toán của $V$.
Như vậy span của $S$ sẽ là một cái gì đó mang cấu trúc của một không gian vector và chứa mọi vector của $S$.

Người ta chứng minh được $\operatorname{span}(S)$ là tập hợp tất cả các tổ hợp tuyến tính của các vector trong $S$:

$$
\operatorname{span}(S) = \left\lbrace \sum_{i=1}^k \lambda_i \mathbf{v}_i \mid k\in\mathbb{N}, \mathbf{v}_i \in S, \lambda_i\in\mathbb{K} \right\rbrace
$$

