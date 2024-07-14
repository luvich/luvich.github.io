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

Có một tập con $S$ (không nhất thiết hữu hạn) các vector của $V$. Một <span style="font-weight: bold; color: #FF6E40;">mở rộng / mở rộng tuyến tính / bao tuyến tính</span> (<i>span / linear span / linear hull</i>) của $S$ là giao của tất cả các không gian vector con của $V$ mà chứa $S$.

Khái niệm giao của một cái gì đó chứa một tập hợp cho trước rất thường gặp trong toán học, giống như bao affine, bao lồi, radical của ideal, ... Ở đây giao của các không gian vector con, nhớ lại rằng không gian vector con là không gian mà đóng kín đối với các phép toán của $V$.
Như vậy span của $S$ sẽ là một cái gì đó mang cấu trúc của một không gian vector và chứa mọi vector của $S$.

Người ta chứng minh được $\operatorname{span}(S)$ là tập hợp tất cả các tổ hợp tuyến tính của các vector trong $S$:

$$
\operatorname{span}(S) = \left\lbrace \sum_{i=1}^k \lambda_i \mathbf{v}_i \mid k\in\mathbb{N}, \mathbf{v}_i \in S, \lambda_i\in\mathbb{K}. \right\rbrace
$$

Trong series này, ta sẽ xét $S$ là một tập hợp hữu hạn gồm $k$ vector.

# Lăng kính đại số
Lăng kính đại số nhìn $\operatorname{span}(S)$ như thế nào? Lấy một vector $\mathbf{v}=\left(v_1,\ldots,v_n\right)\in \operatorname{span}(S)$. Ta thấy rằng hệ phương trình tuyến tính (ẩn $\lambda_i$) sau

$$
\begin{align}
v_{11} \lambda_1 + \cdots + v_{1k}\lambda_k &= v_1\\
\vdots\\
v_{n1} \lambda_1 + \cdots + v_{nk}\lambda_k &= v_n
\end{align}
$$

luôn có nghiệm trong $\mathbb{K}^k$. Nghĩa là $\operatorname{span}(S)$ là một tập hợp chứa tất cả các "vế phải" để hệ phương trình trên luôn luôn có nghiệm. Ta sẽ hình dung $\operatorname{span}(S)$ như một tập hợp chứa "điều kiện luôn có nghiệm" của một hệ phương trình, chứa một điều khả dĩ nào đó mà một hệ thống có thể vận hành tốt.

# Lăng kính hình học
Ở Phần 2, ta biết rằng một tổ hợp tuyến tính chính của các vector trong $S$ chính là việc thực hiện hai phép biến hình tịnh tiến và vị tự. Trước hết co dãn các vector, sau đó dịch chuyển chúng. Như vậy $\operatorname{span}(S)$ chứa mọi kết quả có thể có khi thực hiện các phép biến đổi trên. Thử xét một vài trường hợp của $S$.

<ol>
  <li>
    $k=1$, i.e., $S = \left\lbrace \mathbf{v} \right\rbrace$. Khi đó

    $$
    \operatorname{span}(\mathbf{v}) = \left\lbrace  \lambda \mathbf{v} \mid  \lambda\in\mathbb{K}. \right\rbrace
    $$

    là kết quả của các phép vị tự. Hay nói cách khác, là kết quả co dãn mũi tên $\mathbf{v}$. Ở đây chỉ có một vector, nên ta không thực hiện phép tịnh tiến nào, mà chỉ thực hiện phép vị tự. Nhận thấy rằng, phương của các vector này cũng chính là phương của $\mathbf{v}$. Nếu đặt các vector này chung gốc thì ngọn của chúng sẽ tạo thành một đường thẳng.
    <img src="https://miro.medium.com/v2/resize:fit:1066/1*8DonjGigO6R1TUzxLeh9vw.png" alt="Span của một vector" style="width:100%;">
    Như vậy có thể xem mở rộng của một vector chính là phương của vector đó.
  </li>
  <li>
    $k=2$, i.e., $S = \left\lbrace \mathbf{u}, \mathbf{v} \right\rbrace$. Khi đó

    $$
    \operatorname{span}(\mathbf{u},\mathbf{v}) = \left\lbrace  \alpha \mathbf{u} + \beta \mathbf{v} \mid  \alpha, \beta\in\mathbb{K}. \right\rbrace
    $$
  </li>
</ol>
