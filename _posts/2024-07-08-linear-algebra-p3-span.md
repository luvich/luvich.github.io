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
Ở <a href="https://luvich.github.io/linear-algebra-p2-linear-independence" style="color: blue;">Phần 2</a>, ta biết rằng một tổ hợp tuyến tính của các vector trong $S$ chính là việc thực hiện hai phép biến hình tịnh tiến và vị tự. Trước hết co dãn các vector, sau đó dịch chuyển chúng. Như vậy $\operatorname{span}(S)$ chứa mọi kết quả có thể có khi thực hiện các phép biến đổi trên. Thử xét một vài trường hợp của $S$.

<ol>
  <li>
    $k=1$ và $S = \left\lbrace \mathbf{v} \right\rbrace$. Khi đó

    $$
    \operatorname{span}(\mathbf{v}) = \left\lbrace  \lambda \mathbf{v} \mid  \lambda\in\mathbb{K} \right\rbrace.
    $$

    là kết quả của các phép vị tự. Hay nói cách khác, là kết quả co dãn mũi tên $\mathbf{v}$. Ở đây chỉ có một vector, nên ta không thực hiện phép tịnh tiến nào, mà chỉ thực hiện phép vị tự. Nhận thấy rằng, phương của các vector này cũng chính là phương của $\mathbf{v}$. Nếu đặt các vector này chung gốc thì ngọn của chúng sẽ tạo thành một đường thẳng.
    <img src="https://miro.medium.com/v2/resize:fit:1066/1*8DonjGigO6R1TUzxLeh9vw.png" alt="Span của một vector" style="width:100%;">
    Như vậy có thể xem mở rộng của một vector chính là phương của vector đó.
  </li>
  
  <li>
    $k=2$ và $S = \left\lbrace \mathbf{u}, \mathbf{v} \right\rbrace$. Khi đó

    $$
    \operatorname{span}(\mathbf{u},\mathbf{v}) = \left\lbrace  \alpha \mathbf{u} + \beta \mathbf{v} \mid  \alpha, \beta\in\mathbb{K} \right\rbrace.
    $$

    Ở đây ta thấy rằng $\operatorname{span}(\mathbf{u},\mathbf{v}) = \operatorname{span}(\mathbf{u})+\operatorname{span}(\mathbf{v})$. Nếu $\mathbf{u}$ và $\mathbf{v}$ cùng phương thì $\operatorname{span}(\mathbf{u},\mathbf{v})$ chính là phương đó. Nếu $\mathbf{u}$ và $\mathbf{v}$ không cùng phương (độc lập tuyến tính), thì $\operatorname{span}(\mathbf{u},\mathbf{v})$ là việc tịnh tiến vector trong $\operatorname{span}(\mathbf{u})$ theo vector trong $\operatorname{span}(\mathbf{v})$. Việc thực hiện này sẽ tạo thành một mặt phẳng (plane): tưởng tượng ta "cầm" một đường thẳng và "trượt" nó dọc theo một đường thẳng khác (không cùng phương) thì vết lưu lại là toàn bộ mặt phẳng (chứa hai đường thẳng này).
  </li>

  <li>
    $k=3$ và $S = \left\lbrace \mathbf{u}, \mathbf{v}, \mathbf{w} \right\rbrace$. Khi đó

    $$
    \operatorname{span}(\mathbf{u},\mathbf{v}, \mathbf{w}) = \left\lbrace  \alpha \mathbf{u} + \beta \mathbf{v} + \gamma \mathbf{w}\mid  \alpha, \beta, \gamma\in\mathbb{K} \right\rbrace.
    $$

    Giả sử ba vector này độc lập tuyến tính. Bây giờ ta "cầm" một mặt phẳng và "trượt" nó dọc theo một đường thẳng khác (không cùng phương) thì vết lưu lại là một vùng không gian nào đó. 
  </li>
</ol>

Nhận tiện nhắc lại một chút về tính độc lập tuyến tính ở <a href="https://luvich.github.io/linear-algebra-p2-linear-independence" style="color: blue;">Phần 2</a>.<br>
Hệ một vector luôn độc lập tuyến tính (vì ta luôn có có cách co vector này về $\mathbf{0}$), nó chỉ phụ thuộc khi đó là vector $\mathbf{0}$.<br>
Giờ ta thử xem xét hệ có hai vector trở lên. Tính độc lập tuyến tính hiểu rằng ta <span style="font-weight: bold; color: #D71B3B;">không</span> có cách nào cầm một đường thẳng và trượt nó theo một đường thẳng khác mà đưa kết quả về $\mathbf{0}$. Điều này chỉ có thể thực hiện được khi các phương này trùng nhau để rồi ta chỉ thực hiện một phép co về $\mathbf{0}$, các phương trùng nhau ta hiểu rằng hệ này phụ thuộc tuyến tính.

Như vậy, qua lăng kính hình học, span của một tập hợp là ta "cầm" phương của một vector và trượt nó lần lượt theo phương của các vector còn lại, kết quả sẽ tạo ra một vùng không gian nào đó. Tưởng tượng như tô màu vào phương đó, rồi vung vẩy theo các phương còn lại thì thu được một vùng nào đó trong không gian vector $V$.


# Lăng kính thiểu năng
Nếu ta xem $S$ là tập hợp các camera thì vùng không gian mà các camera này thu được trên màn hình chính là span của $S$. 

Trong trường hợp các camera này đặt ở vị trí chưa đủ tốt, thì các hình ảnh có thể bị chồng chéo, vùng không gian thu được có thể "không tối ưu" như hiệu suất mà lẽ ra nó nên có. Tưởng tượng ta đặt hai chiếc camera ở cạnh nhau, thì khả năng rất cao là chúng thu được hình ảnh gần giống nhau (tương ứng cho việc hệ các vector không độc lập tuyến tính).

Trường hợp các camera đặt ở vị trí tốt, thì các hình ảnh thu được vừa đủ tốt, không bị lãng phí tài nguyên, tận dụng tối đa hiệu suất của các camera. Nghĩa là ta có thể quan sát được vùng không gian lớn nhất, hình ảnh thu được nhiều nhất từ một số camera này.

<img src="https://luvich.github.io/assets/img/2024-07-08-cameras.png" alt="Camera Diagram" style="width:100%;">


# Recap
Qua LKTN, span của một tập hợp các vector là toàn bộ hình ảnh có thể thu được từ bộ các camera này.
