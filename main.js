        //搜索匡
        const searchBox = document.getElementById("searchBox");
        const courseContainer = document.getElementById("courseContainer");
    
        searchBox.addEventListener("input", () => {
          const keyword = searchBox.value.toLowerCase();
          const listItems = courseContainer.querySelectorAll("li");
          const allDetails = courseContainer.querySelectorAll("details");
    
          if (keyword === "") {
            // 清空搜尋時：顯示全部課程，收合所有區塊
            listItems.forEach(li => li.style.display = "list-item");
            allDetails.forEach(d => d.open = false);
            return;
          }
    
          // 收合全部
          allDetails.forEach(d => d.open = false);
    
          listItems.forEach(li => {
            const text = li.textContent.toLowerCase();
            const isMatch = text.includes(keyword);
            li.style.display = isMatch ? "list-item" : "none";
    
            if (isMatch) {
              let parent = li.parentElement;
              while (parent && parent.tagName.toLowerCase() !== "main") {
                if (parent.tagName.toLowerCase() === "details") {
                  parent.open = true;
                }
                parent = parent.parentElement;
              }
            }
          });
        });

        //批量修改footer
        fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });