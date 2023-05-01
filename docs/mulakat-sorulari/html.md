# HTML


1. **HTML nedir? Ne işe yarar?**
::: details Cevap
HTML (Hyper Text Markup Language), web sayfalarının yapısını tanımlamak ve düzenlemek için kullanılan bir işaretleme dilidir.

HTML, bir web sayfasının içeriğini belirleyen metin, görüntü, ses ve video gibi unsurların etiketlerle tanımlandığı bir yapıya sahiptir. Bu etiketler, bir web sayfasının yapısını oluşturur ve tarayıcılara web sayfasının nasıl görüntüleneceği hakkında bilgi verir.
:::

---

2. **```<script>```, ```<script async>``` ve ```<script defer>``` etiketleri nedir? Bu etiketler ne işe yarar?**

::: details Cevap
```<script>```, ```<script async>``` ve ```<script defer>``` etiketleri, HTML sayfalarında JavaScript kodlarının yüklenmesi ve çalıştırılması için kullanılan etiketlerdir.

- ```<script>``` etiketi: Bu etiket, sayfa içinde bulunduğu konumda yazılan JavaScript kodlarını yükleyerek çalıştırır. Sayfanın yüklenmesi ve işlenmesi bu kodların tamamlanması için bekler.

- ```<script async>``` etiketi: Bu etiket, sayfanın işleme devam etmesi için JavaScript dosyasının yüklenmesini beklemeksizin, aynı anda yüklenmesini sağlar. Yani, sayfa işlenirken JavaScript dosyası yüklenmeye devam eder. Bu yöntem, küçük boyutlu dosyalar için uygun olsa da, büyük dosyalar için uygun değildir.

- ```<script defer>``` etiketi: Bu etiket, sayfa işlenirken JavaScript dosyasının yüklenmesini beklemesini sağlar, ancak dosyanın yüklenmesi işlemi sayfanın işlenmesinden sonra gerçekleşir. Bu yöntem, büyük boyutlu dosyalar için daha uygun ve performans açısından daha iyi bir seçenektir.

Özetle, ```<script>``` etiketi sayfanın işlenmesini durdurarak JavaScript kodlarını yükler ve çalıştırırken, ```<script async>``` etiketi aynı anda yükler ve ```<script defer>``` etiketi ise sayfanın işlenmesinden sonra yükler. Bu etiketlerin doğru kullanımı, web sayfasının performansı ve yüklenme hızı açısından önemlidir.
:::

---

3. **Canvas ve svg nedir? Bunlar arasındaki farklar nelerdir?**

::: details Cevap
Canvas ve SVG (Scalable Vector Graphics), web tabanlı grafik oluşturmak için kullanılan iki farklı teknolojidir. İkisi de web sayfalarında grafikleri ve animasyonları oluşturmak için kullanılabilirler, ancak farklı yaklaşımları vardır.

Canvas, JavaScript ile birlikte kullanılan bir HTML5 öğesidir. Canvas, bir tuval veya beyaz bir kağıt parçası gibi düşünülebilir ve JavaScript kodu kullanılarak üzerinde çizim ve boyama işlemleri yapılabilir. Canvas, piksel tabanlı bir yaklaşım kullanır ve bir kez çizilen grafikleri yeniden boyutlandırmak için yeniden hesaplama yapmak gerekebilir.

SVG, vektör tabanlı bir grafik formatıdır ve XML ile yazılmıştır. Vektör tabanlı olduğundan, grafiklerin ölçeklendirilmesi ve boyutlandırılması sorun teşkil etmez. SVG grafikleri, bir kez oluşturulduğunda yeniden boyutlandırılabilir ve yüksek çözünürlüklü cihazlarla uyumlu hale getirilebilir. SVG, CSS ve JavaScript ile birlikte kullanılabilir.
