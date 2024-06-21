<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vincent van Gogh</title>
</head>
<body>
    <h1>Vincent van Gogh</h1>
    <form id="sortform">
        <label for="sortby">Sort items by:</label>
        <select id="sortby">
            <option value="" selected> -- select one -- </option>
            <option value="name"> Name</option>
            <option value="date"> Date</option>
        </select>
    </form>

    <ul id="items">
        <li data-name="The Starry Night" data-date="1889"><strong>The Starry Night</strong> - 1889</li>
        <img src="the-starry-night.jpg" class="art-image">
        <li data-name="Almond Blossom" data-date="1889"><strong>Almond Blossom</strong> - 1889</li>
        <img src="almond-blossom.jpg" class="art-image">
        <li data-name="The Potato Eaters" data-date="1885"><strong>The Potato Eaters</strong> - 1885</li>
        <img src="potato-eaters.jpg" class="art-image">
        <li data-name="The Langlois Bridge at Arles" data-date="1888"><strong>The Langlois Bridge at Arles</strong> - 1888</li>
        <img src="langlois-bridge-at-arles.jpg" class="art-image">
        <li data-name="Houses at Auvers" data-date="1890"><strong>Houses at Auvers</strong> - 1890</li>
        <img src="houses-at-auvers.jpg" class="art-image">
        <li data-name="Irises" data-date="1889"><strong>Irises</strong> - 1889</li>
        <img src="irises.jpg" class="art-image">
    </ul>


    <script src="script5.js"></script> 
</body>
</html>
