---
layout: post
title: "Đại số tuyến tính (P2): Độc lập tuyến tính"
author: "Luvich"
categories: 
  - Mathematics
  - Algebra
  - Linear Algebra
tags: [linear algebra, mathematics, đại số tuyến tính, vector, độc lập tuyến tính,linear independent]
image: vector_cover.svg.png
---

Nội dung bài này xoay quanh tính độc lập tuyến tính và phụ thuộc tuyến tính của một hệ các vector (có đề cập ở bài trước <link>). Luôn giả sử $V$ là một không gian vector trên trường $\mathbb{K}$.

Trước hết đi qua vài định nghĩa, một <b>tổ hợp tuyến tính</b> (*linear combination*) của các vector $\mathbf{v}_ 1,\ldots,\mathbf{v}_ n \in V$ là một biểu thức có dạng $\sum_{i=1}^n \lambda_i \mathbf{v}_i$, trong đó $\lambda_i\in\mathbb{K}$. Một vector $\mathbf{v}\in V$ mà có dạng trên thì gọi là một <b>biểu diễn tuyến tính</b> (*linear representation*) của $\mathbf{v}$ qua các vector $\mathbf{v}_i$. Lưu ý thêm là biểu diễn tuyến tính có thể không duy nhất.

Hệ $\left\lbrace \mathbf{v}_i \right\rbrace$ được gọi là <b>độc lập tuyến tính</b> (*linearly independent*) nếu hệ thức

$$
\lambda_1\mathbf{v}_1+\cdots \lambda_n\mathbf{v}_n=0
$$

xảy ra chỉ khi $\lambda_1=\cdots=\lambda_n=0$.  Nếu $\left\lbrace \mathbf{v}_i \right\rbrace$ không độc lập tuyến tính thì ta nói nó <b>phụ thuộc tuyến tính</b> (*linearly dependent*).

# Lăng kính đại số
Qua lăng kính đại số, việc độc lập hay phụ thuộc của một hệ các vector trở thành tính duy nhất nghiệm của một hệ phương trình tuyến tính. Cụ thể, hệ các vector $\left\lbrace \mathbf{v}_ i = \left[v_{i1},\ldots,v_{im}\right]^\top \right\rbrace$ được gọi là độc lập tuyến tính nếu hệ $m$ phương trình tuyến tính thuần nhất $n$ ẩn $\lambda_1,\ldots, \lambda_n$ sau:

\begin{align*}
v_{11} \lambda_1 + \cdots + v_{n1}\lambda_n &= 0\\
\vdots\\
v_{1m} \lambda_1 + \cdots + v_{nm}\lambda_n &= 0
\end{align*}

có duy nhất nghiệm $\lambda_1=\cdots=\lambda_n=0$. Ý rằng hệ trên chỉ có nghiệm tầm thường. 

# Lăng kính hình học
Như đã đề cập ở bài trước, phép cộng và phép nhân với vô hướng, qua lăng kính hình học chính là phép tịnh tiến và phép vị tự. Khi đó một tổ hợp tuyến chính là việc ta “dịch chuyển” và “co dãn” các mũi tên trong không gian. Như vậy, một biểu diễn tuyến tính của mũi tên $\mathbf{v}$ chính là kết quả thu được sau khi ta thực hiện hàng loạt các phép tịnh tiến $\mathbf{v}_i$ và vị tự $\lambda_i$. Tính độc lập tuyến tính có thể hiểu rằng, <b>không</b> có một cách nào có thể thực hiện hàng loạt các phép biến đổi như vậy mà đưa kết quả về vector $\mathbf{0}$, ngoại trừ việc mỗi lần vị tự đều bóp mũi tên đó về $\mathbf{0}$. Nếu việc này có thể thực hiện được, thì các mũi tên này không độc lập với nhau. Để ý rằng, phép vị tự ảnh hưởng đến hướng và độ lớn của vector, còn phép tịnh tiến sẽ ảnh hưởng đến phương.

Trong không gian các vector tự do của hình học sơ cấp, cụ thể $\mathbb{R}^3$, tính độc lập tuyến tính của hệ hai vector xảy ra khi và chỉ khi chúng không cùng phương, hệ ba vector khi và chỉ khi chúng không đồng phẳng, hệ lớn hơn 3 vector thì luôn phụ thuộc tuyến tính.<br>
Xét 3 vector trong không gian $\mathbb{R}^2$, thì luôn luôn có cách để “co dãn” các vector này, sau đó dịch chuyển chúng để về $\mathbf{0}$. Ví dụ $\mathbf{v}_1=\left(1,2\right)$, $\mathbf{v}_2=\left(3,4\right)$ và $\mathbf{v}_3=\left(5,6\right)$. Ta có $\mathbf{v}_1-2\mathbf{v}_2+\mathbf{v}_3=\mathbf{0}$.

# Lăng kính thiểu năng
Nếu toạ độ của vector ví như hình ảnh trên màn hình thì độc lập tuyến tính chính là việc các hình ảnh này không bị chồng chéo, hình ảnh nào cũng quan trọng cho việc quan sát. Phụ thuộc tuyến tính tức là có một hình ảnh nào đó “không quá quan trọng”, vì ta có thể quan sát nó thông qua các hình ảnh khác. Tức là hệ các hình ảnh này hơi “thừa”, ta có thể “bỏ bớt” để đạt được một hệ khác mà các hình ảnh “vừa đủ” cho việc quan sát.

# Recap
Tính độc lập tuyến tính của một hệ các vector qua LKTN không có gì hơn là các hình ảnh “vừa đủ” tốt cho việc quan sát chúng.
