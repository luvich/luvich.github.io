---
title: 'Tensors: Hình học và Ứng dụng - P2.1 - Đại số đa tuyến tính - Nhắc lại về đại số tuyến tính'
published: 2026-02-14
description: Một số kết quả trong đại số tuyến tính
image: "./landsberg.jpg"
tags: [Toán, Tensor, Hình học, Ứng dụng, Mathematics, Geometry, Application, Đại số, Algebra, Đại số tuyến tính, Linear Algebra, Đại số đa tuyến tính, Multilinear Algebra, Tensor Decomposition, Phân rã tensor]
category: Tensor
toc: true
draft: false
---

## Ánh xạ tuyến tính hạng-1

Với $\alpha \in V^*$, đặt 
$$
\alpha^\perp \coloneqq \{ \bm{v} \in V \mid \alpha(\bm{v}) = 0 \},
$$
và với $\bm{w} \in V$, ký hiệu $\langle \bm{w} \rangle$ là không gian con sinh bởi $\bm{w}$.

Cho $\alpha \in V^*$ và $w \in W$. Ánh xạ tuyến tính
$$
\alpha \otimes w : V \to W, \qquad \bm{v} \mapsto \alpha(\bm{v}) \bm{w}
$$
được gọi là <span style="color:#ff6e40;"><em>hạng-1</em></span>.

::::hint[<span style="color:#12a4d9;"> **Tính chất** </span>]
Nhận xét rằng
$$
\ker(\alpha \otimes \bm{w}) = \alpha^\perp, 
\qquad 
\operatorname{im}(\alpha \otimes \bm{w}) = \langle \bm{w} \rangle.
$$

- Nếu chọn các cơ sở của $V$ và $W$, thì ma trận biểu diễn $\alpha \otimes \bm{w}$ có hạng bằng một.

- Mọi ma trận $n \times m$ hạng-1 đều là tích
của một vectơ cột với một vectơ hàng.

- Một ma trận khác không có hạng một khi và chỉ khi
mọi định thức con $2 \times 2$ của nó đều bằng $0$.
:::

## Annihilator
Cho $U \subset V$ là một không gian con tuyến tính. 
Định nghĩa $U^\perp \subset V^*$, gọi là <span style="color:#ff6e40;"><em>không gian triệt tiêu</em></span>
(annihilator) của $U$, bởi
$$
U^\perp := \{ \alpha \in V^* \mid \alpha(\bm{u}) = 0 \;\; \forall \bm{u} \in U \}.
$$
Khi đó
$
(U^\perp)^\perp = U.
$

Với một ánh xạ tuyến tính $f : V \to W$, ta luôn có
$$
\ker f = (\operatorname{im} f^T)^\perp.
$$
<span style="color:#ff6e40;"><em>Ánh xạ chuyển vị</em></span> $f^T : W^* \to V^*$, hay còn được gọi là <span style="color:#ff6e40;"><em>ánh xạ kề</em></span> của $f:V\to W$, 
 được định nghĩa bởi $\beta \mapsto (\bm{v}\mapsto \beta(f(\bm{v})))$.

Đây được xem là *định lý cơ bản của đại số tuyến tính*. 
Hệ quả là
$
\operatorname{rank}(f) = \operatorname{rank}(f^T),
$
tức là đối với một ma trận, hạng dòng bằng hạng cột.

