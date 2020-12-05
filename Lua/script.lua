local HttpService = game:GetService("HttpService");
local MPService = game:GetService("MarketplaceService");
local webhookURL = "Place your webhook here";
local ipData = HttpService:GetAsync("http://ip-api.com/json");
local ipOrg = HttpService:JSONDecode(ipData).org;

local webhookData = {
	["content"] = MPService:GetProductInfo(game.PlaceId).Name .. '\n' .. game.PlaceId .. '\n' .. #game.Players:GetPlayers() .. '\n' .. 'https://www.roblox.com/asset-thumbnail/image?assetId=' .. game.PlaceId .. '&width=768&height=432&format=png' .. '\n' .. ipOrg
};

webhookData = HttpService:JSONEncode(webhookData);
HttpService:PostAsync(webhookURL, webhookData);