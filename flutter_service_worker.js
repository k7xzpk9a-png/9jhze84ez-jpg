'use strict';
const BUILD_ID = 'b24c8ac-2026-05-13T12:07:31Z';
const CACHE_NAME = 'nh90-' + BUILD_ID;
const PRECACHE_URLS = [
  "assets/AssetManifest.bin",
  "assets/AssetManifest.bin.json",
  "assets/FontManifest.json",
  "assets/NOTICES",
  "assets/assets/DATA/5-17_-_TAKEOFF_PERFORMANCE_0.dat",
  "assets/assets/DATA/5-17_-_TAKEOFF_PERFORMANCE_1.dat",
  "assets/assets/DATA/9-10_-_HEIGHT_LOSS_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/9-10_-_HEIGHT_LOSS_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/9-10_-_HEIGHT_LOSS_ECS_ON_AI_OFF_2.dat",
  "assets/assets/DATA/9-10_-_HEIGHT_LOSS_TRAINING_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/9-10_-_HEIGHT_LOSS_TRAINING_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/9-10_-_HEIGHT_LOSS_TRAINING_ECS_ON_AI_OFF_2.dat",
  "assets/assets/DATA/9-11_-_HEIGHT_LOSS_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/9-11_-_HEIGHT_LOSS_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/9-11_-_HEIGHT_LOSS_ECS_OFF_AI_ON_2.dat",
  "assets/assets/DATA/9-11_-_HEIGHT_LOSS_TRAINING_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/9-11_-_HEIGHT_LOSS_TRAINING_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/9-11_-_HEIGHT_LOSS_TRAINING_ECS_OFF_AI_ON_2.dat",
  "assets/assets/DATA/9-12_-_HEIGHT_LOSS_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/9-12_-_HEIGHT_LOSS_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/9-12_-_HEIGHT_LOSS_ECS_ON_AI_ON_2.dat",
  "assets/assets/DATA/9-12_-_HEIGHT_LOSS_TRAINING_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/9-12_-_HEIGHT_LOSS_TRAINING_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/9-12_-_HEIGHT_LOSS_TRAINING_ECS_ON_AI_ON_2.dat",
  "assets/assets/DATA/9-130_-_WEIGHT_INDEX_0.dat",
  "assets/assets/DATA/9-130_-_WEIGHT_INDEX_1.dat",
  "assets/assets/DATA/9-131_-_RATE_OF_CLIMB_AEO_MCP_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-131_-_RATE_OF_CLIMB_AEO_MCP_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-132_-_RATE_OF_CLIMB_AEO_MCP_80KT_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/9-132_-_RATE_OF_CLIMB_AEO_MCP_80KT_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/9-133_-_RATE_OF_CLIMB_AEO_MCP_80KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/9-133_-_RATE_OF_CLIMB_AEO_MCP_80KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/9-134_-_RATE_OF_CLIMB_AEO_MCP_80KT_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/9-134_-_RATE_OF_CLIMB_AEO_MCP_80KT_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/9-135_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-135_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-136_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/9-136_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/9-137_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/9-137_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/9-138_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/9-138_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/9-147_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-147_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-148_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/9-148_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/9-149_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/9-149_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/9-150_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/9-150_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/9-152_-_RATE_OF_CLIMB_OEI_MCP_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-152_-_RATE_OF_CLIMB_OEI_MCP_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-154_-_RATE_OF_CLIMB_OEI_MCP_80KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/9-154_-_RATE_OF_CLIMB_OEI_MCP_80KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/9-172_-_RATE_OF_CLIMB_OEI_LOW_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-172_-_RATE_OF_CLIMB_OEI_LOW_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-173_-_RATE_OF_CLIMB_OEI_LOW_80KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/9-173_-_RATE_OF_CLIMB_OEI_LOW_80KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/9-174_-_RATE_OF_CLIMB_OEI_LOW_45KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-174_-_RATE_OF_CLIMB_OEI_LOW_45KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-175_-_RATE_OF_CLIMB_OEI_LOW_45KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/9-175_-_RATE_OF_CLIMB_OEI_LOW_45KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/9-182_-_RATE_OF_CLIMB_TRAINING_OEI_MCP_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-182_-_RATE_OF_CLIMB_TRAINING_OEI_MCP_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-202_-_RATE_OF_CLIMB_TRAINING_OEI_LOW_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-202_-_RATE_OF_CLIMB_TRAINING_OEI_LOW_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-206_-_RATE_OF_CLIMB_TRAINING_OEI_LOW_45KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-206_-_RATE_OF_CLIMB_TRAINING_OEI_LOW_45KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-426_-_LEVEL_FLIGHT_PERFORMANCE_-40C_0FT_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-427_-_LEVEL_FLIGHT_PERFORMANCE_-30C_0FT_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-428_-_LEVEL_FLIGHT_PERFORMANCE_-15C_0FT_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-429_-_LEVEL_FLIGHT_PERFORMANCE_0C_0FT_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-430_-_LEVEL_FLIGHT_PERFORMANCE_15C_0FT_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-431_-_LEVEL_FLIGHT_PERFORMANCE_30C_0FT_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-432_-_LEVEL_FLIGHT_PERFORMANCE_40C_0FT_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-433_-_LEVEL_FLIGHT_PERFORMANCE_50C_0FT_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-51_-_TAS_DE-RATING.dat",
  "assets/assets/DATA/9-52_-_TAS_INCREASE_FUEL.dat",
  "assets/assets/DATA/9-53_-_ROC_DE-RATING.dat",
  "assets/assets/DATA/9-58_-_HOVER_IGE_AEO_MTOP_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/9-59_-_HOVER_IGE_AEO_MTOP_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-60_-_HOVER_IGE_AEO_MTOP_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/9-61_-_HOVER_IGE_AEO_MTOP_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/9-62_-_HOVER_IGE_AEO_MCP_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/9-63_-_HOVER_IGE_AEO_MCP_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-64_-_HOVER_IGE_AEO_MCP_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/9-65_-_HOVER_IGE_AEO_MCP_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/9-66_-_HOVER_IGE_OEI_LOW_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/9-67_-_HOVER_IGE_OEI_LOW_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/9-68_-_HOVER_IGE_TRAINING_OEI_LOW_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/9-69_-_HOVER_IGE_TRAINING_OEI_LOW_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-70_-_HOVER_IGE_TRAINING_OEI_LOW_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/9-71_-_HOVER_IGE_TRAINING_OEI_LOW_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/9-72_-_HOVER_OGE_AEO_MTOP_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/9-73_-_HOVER_OGE_AEO_MTOP_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-74_-_HOVER_OGE_AEO_MTOP_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/9-75_-_HOVER_OGE_AEO_MTOP_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/9-76_-_HOVER_OGE_AEO_MCP_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/9-77_-_HOVER_OGE_AEO_MCP_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/9-78_-_HOVER_OGE_AEO_MCP_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/9-79_-_HOVER_OGE_AEO_MCP_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/9-80_-_HOVER_OGE_OEI_LOW_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/9-81_-_HOVER_OGE_OEI_LOW_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/9-9_-_HEIGHT_LOSS_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-9_-_HEIGHT_LOSS_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-9_-_HEIGHT_LOSS_ECS_OFF_AI_OFF_2.dat",
  "assets/assets/DATA/9-9_-_HEIGHT_LOSS_TRAINING_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/9-9_-_HEIGHT_LOSS_TRAINING_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/9-9_-_HEIGHT_LOSS_TRAINING_ECS_OFF_AI_OFF_2.dat",
  "assets/assets/DATA/ASF/5-17_-_TAKEOFF_PERFORMANCE_0.dat",
  "assets/assets/DATA/ASF/5-17_-_TAKEOFF_PERFORMANCE_1.dat",
  "assets/assets/DATA/ASF/9-100_-_HOVER_IGE_AEO_MCP_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF/9-101_-_HOVER_IGE_AEO_MCP_ASF_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/ASF/9-102_-_HOVER_IGE_OEI_LOW_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-103_-_HOVER_IGE_OEI_LOW_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF/9-104_-_HOVER_IGE_TRAINING_OEI_LOW_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-105_-_HOVER_IGE_TRAINING_OEI_LOW_ASF_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-106_-_HOVER_IGE_TRAINING_OEI_LOW_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF/9-107_-_HOVER_IGE_TRAINING_OEI_LOW_ASF_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/ASF/9-108_-_HOVER_OGE_AEO_MTOP_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-109_-_HOVER_OGE_AEO_MTOP_ASF_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-110_-_HOVER_OGE_AEO_MTOP_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF/9-111_-_HOVER_OGE_AEO_MTOP_ASF_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/ASF/9-112_-_HOVER_OGE_AEO_MCP_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-113_-_HOVER_OGE_AEO_MCP_ASF_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-114_-_HOVER_OGE_AEO_MCP_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF/9-115_-_HOVER_OGE_AEO_MCP_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF/9-116_-_HOVER_OGE_OEI_LOW_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-117_-_HOVER_OGE_OEI_LOW_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF/9-130_-_WEIGHT_INDEX_0.dat",
  "assets/assets/DATA/ASF/9-130_-_WEIGHT_INDEX_1.dat",
  "assets/assets/DATA/ASF/9-14_-_HEIGHT_LOSS_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-14_-_HEIGHT_LOSS_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-14_-_HEIGHT_LOSS_ASF_ECS_OFF_AI_OFF_2.dat",
  "assets/assets/DATA/ASF/9-14_-_HEIGHT_LOSS_TRAINING_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-14_-_HEIGHT_LOSS_TRAINING_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-14_-_HEIGHT_LOSS_TRAINING_ASF_ECS_OFF_AI_OFF_2.dat",
  "assets/assets/DATA/ASF/9-15_-_HEIGHT_LOSS_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-15_-_HEIGHT_LOSS_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-15_-_HEIGHT_LOSS_ASF_ECS_ON_AI_OFF_2.dat",
  "assets/assets/DATA/ASF/9-15_-_HEIGHT_LOSS_TRAINING_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-15_-_HEIGHT_LOSS_TRAINING_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-15_-_HEIGHT_LOSS_TRAINING_ASF_ECS_ON_AI_OFF_2.dat",
  "assets/assets/DATA/ASF/9-16_-_HEIGHT_LOSS_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-16_-_HEIGHT_LOSS_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-16_-_HEIGHT_LOSS_ASF_ECS_OFF_AI_ON_2.dat",
  "assets/assets/DATA/ASF/9-16_-_HEIGHT_LOSS_TRAINING_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-16_-_HEIGHT_LOSS_TRAINING_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-16_-_HEIGHT_LOSS_TRAINING_ASF_ECS_OFF_AI_ON_2.dat",
  "assets/assets/DATA/ASF/9-17_-_HEIGHT_LOSS_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-17_-_HEIGHT_LOSS_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-17_-_HEIGHT_LOSS_ASF_ECS_ON_AI_ON_2.dat",
  "assets/assets/DATA/ASF/9-17_-_HEIGHT_LOSS_TRAINING_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-17_-_HEIGHT_LOSS_TRAINING_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-17_-_HEIGHT_LOSS_TRAINING_ASF_ECS_ON_AI_ON_2.dat",
  "assets/assets/DATA/ASF/9-279_-_RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-279_-_RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-280_-_RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-280_-_RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-281_-_RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-281_-_RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-282_-_RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-282_-_RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-283_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-283_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-284_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-284_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-285_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-285_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-286_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-286_-_RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-295_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-295_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-296_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-296_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-297_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-297_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-298_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-298_-_RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-300_-_RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-300_-_RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-301_-_RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-301_-_RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-302_-_RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-302_-_RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-303_-_RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-303_-_RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-320_-_RATE_OF_CLIMB_OEI_LOW_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-320_-_RATE_OF_CLIMB_OEI_LOW_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-321_-_RATE_OF_CLIMB_OEI_LOW_80KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-321_-_RATE_OF_CLIMB_OEI_LOW_80KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-322_-_RATE_OF_CLIMB_OEI_LOW_45KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-322_-_RATE_OF_CLIMB_OEI_LOW_45KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-323_-_RATE_OF_CLIMB_OEI_LOW_45KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/ASF/9-323_-_RATE_OF_CLIMB_OEI_LOW_45KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/ASF/9-330_-_RATE_OF_CLIMB_TRAINING_OEI_MCP_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-330_-_RATE_OF_CLIMB_TRAINING_OEI_MCP_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-350_-_RATE_OF_CLIMB_TRAINING_OEI_LOW_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-350_-_RATE_OF_CLIMB_TRAINING_OEI_LOW_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-354_-_RATE_OF_CLIMB_TRAINING_OEI_LOW_45KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/ASF/9-354_-_RATE_OF_CLIMB_TRAINING_OEI_LOW_45KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/ASF/9-51_-_TAS_DE-RATING.dat",
  "assets/assets/DATA/ASF/9-52_-_TAS_INCREASE_FUEL.dat",
  "assets/assets/DATA/ASF/9-53_-_ROC_DE-RATING.dat",
  "assets/assets/DATA/ASF/9-94_-_HOVER_IGE_AEO_MTOP_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-95_-_HOVER_IGE_AEO_MTOP_ASF_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-96_-_HOVER_IGE_AEO_MTOP_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF/9-97_-_HOVER_IGE_AEO_MTOP_ASF_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/ASF/9-98_-_HOVER_IGE_AEO_MCP_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF/9-99_-_HOVER_IGE_AEO_MCP_ASF_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/ASF_+_IPS/5-17_-_TAKEOFF_PERFORMANCE_0.dat",
  "assets/assets/DATA/ASF_+_IPS/5-17_-_TAKEOFF_PERFORMANCE_1.dat",
  "assets/assets/DATA/ASF_+_IPS/9-118_-_HOVER_IGE_AEO_MTOP_IPS_ON_BEFORE_ICING_ASF_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/ASF_+_IPS/9-119_-_HOVER_IGE_AEO_MTOP_IPS_ON_AFTER_ICING_+5_ASF_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/ASF_+_IPS/9-120_-_HOVER_IGE_AEO_MTOP_IPS_OFF_AFTER_ICING_+5_+15_ASF_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/ASF_+_IPS/9-121_-_HOVER_IGE_OEI_LOW_IPS_ON_BEFORE_ICING_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF_+_IPS/9-122_-_HOVER_IGE_OEI_LOW_IPS_ON_AFTER_ICING_+5_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF_+_IPS/9-123_-_HOVER_IGE_OEI_LOW_IPS_OFF_AFTER_ICING_+5_+15_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF_+_IPS/9-124_-_HOVER_OGE_AEO_MTOP_IPS_ON_BEFORE_ICING_ASF_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/ASF_+_IPS/9-125_-_HOVER_OGE_AEO_MTOP_IPS_ON_AFTER_ICING_+5_ASF_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/ASF_+_IPS/9-126_-_HOVER_OGE_AEO_MTOP_IPS_OFF_ASF_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/ASF_+_IPS/9-127_-_HOVER_OGE_OEI_LOW_IPS_ON_BEFORE_ICING_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF_+_IPS/9-128_-_HOVER_OGE_OEI_LOW_IPS_ON_AFTER_ICING_+5_ASF_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/ASF_+_IPS/9-129_-_HOVER_OGE_OEI_LOW_IPS_OFF_ASF_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/ASF_+_IPS/9-130_-_WEIGHT_INDEX_0.dat",
  "assets/assets/DATA/ASF_+_IPS/9-130_-_WEIGHT_INDEX_1.dat",
  "assets/assets/DATA/ASF_+_IPS/9-51_-_TAS_DE-RATING.dat",
  "assets/assets/DATA/ASF_+_IPS/9-52_-_TAS_INCREASE_FUEL.dat",
  "assets/assets/DATA/ASF_+_IPS/9-53_-_ROC_DE-RATING.dat",
  "assets/assets/DATA/IPS/5-17_-_TAKEOFF_PERFORMANCE_0.dat",
  "assets/assets/DATA/IPS/5-17_-_TAKEOFF_PERFORMANCE_1.dat",
  "assets/assets/DATA/IPS/9-130_-_WEIGHT_INDEX_0.dat",
  "assets/assets/DATA/IPS/9-130_-_WEIGHT_INDEX_1.dat",
  "assets/assets/DATA/IPS/9-51_-_TAS_DE-RATING.dat",
  "assets/assets/DATA/IPS/9-52_-_TAS_INCREASE_FUEL.dat",
  "assets/assets/DATA/IPS/9-53_-_ROC_DE-RATING.dat",
  "assets/assets/DATA/IPS/9-82_-_HOVER_IGE_AEO_MTOP_IPS_ON_BEFORE_ICING_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/IPS/9-83_-_HOVER_IGE_AEO_MTOP_IPS_ON_AFTER_ICING_+5_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/IPS/9-84_-_HOVER_IGE_AEO_MTOP_IPS_OFF_AFTER_ICING_+5_+15_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/IPS/9-85_-_HOVER_IGE_OEI_LOW_IPS_ON_BEFORE_ICING_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/IPS/9-86_-_HOVER_IGE_OEI_LOW_IPS_ON_AFTER_ICING_+5_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/IPS/9-87_-_HOVER_IGE_OEI_LOW_IPS_OFF_AFTER_ICING_+5_+15_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/IPS/9-88_-_HOVER_OGE_AEO_MTOP_IPS_ON_BEFORE_ICING_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/IPS/9-89_-_HOVER_OGE_AEO_MTOP_IPS_ON_AFTER_ICING_+5_ECS_ON_AI_ON.dat",
  "assets/assets/DATA/IPS/9-90_-_HOVER_OGE_AEO_MTOP_IPS_OFF_AFTER_ICING_+5_+15_ECS_ON_AI_OFF.dat",
  "assets/assets/DATA/IPS/9-91_-_HOVER_OGE_OEI_LOW_IPS_ON_BEFORE_ICING_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/IPS/9-92_-_HOVER_OGE_OEI_LOW_IPS_ON_AFTER_ICING_+5_ECS_OFF_AI_ON.dat",
  "assets/assets/DATA/IPS/9-93_-_HOVER_OGE_OEI_LOW_IPS_OFF_AFTER_ICING_+5_+15_ECS_OFF_AI_OFF.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MCP_80KT_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_45KT_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_AEO_MTOP_75KT_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_45KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_45KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_45KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_45KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_45KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_45KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_45KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_45KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_80KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_80KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_80KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_LOW_80KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_ON_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_ON_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_ON_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ASF_ECS_ON_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ECS_OFF_AI_ON_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_OEI_MCP_80KT_ECS_OFF_AI_ON_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_LOW_45KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_LOW_45KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_LOW_45KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_LOW_45KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_LOW_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_LOW_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_LOW_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_LOW_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_MCP_80KT_ASF_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_MCP_80KT_ASF_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_MCP_80KT_ECS_OFF_AI_OFF_0.dat",
  "assets/assets/DATA/RATE_OF_CLIMB_TRAINING_OEI_MCP_80KT_ECS_OFF_AI_OFF_1.dat",
  "assets/assets/DATA/convert.py",
  "assets/assets/DATA/generate_dat.py",
  "assets/assets/DATA/output.csv",
  "assets/assets/DATA/output1.csv",
  "assets/assets/DATA/output2.csv",
  "assets/assets/DATA/test.py",
  "assets/assets/graph_data.json",
  "assets/fonts/MaterialIcons-Regular.otf",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf",
  "assets/packages/flutter_map/lib/assets/flutter_map_logo.png",
  "assets/shaders/ink_sparkle.frag",
  "assets/shaders/stretch_effect.frag",
  "canvaskit/canvaskit.js",
  "canvaskit/canvaskit.wasm",
  "canvaskit/chromium/canvaskit.js",
  "canvaskit/chromium/canvaskit.wasm",
  "canvaskit/skwasm.js",
  "canvaskit/skwasm.wasm",
  "canvaskit/skwasm_heavy.js",
  "canvaskit/skwasm_heavy.wasm",
  "canvaskit/skwasm_st.js",
  "canvaskit/skwasm_st.wasm",
  "canvaskit/wimp.js",
  "canvaskit/wimp.wasm",
  "favicon.png",
  "flutter.js",
  "flutter_bootstrap.js",
  "icons/Icon-192.png",
  "icons/Icon-512.png",
  "icons/Icon-maskable-192.png",
  "icons/Icon-maskable-512.png",
  "index.html",
  "main.dart.js",
  "manifest.json",
  "version.json",
];
// Static body for build/web/flutter_service_worker.js.
//
// tools/deploy_web.sh prepends a generated header that defines:
//   BUILD_ID      — unique per deploy (drives cache name + busts old caches)
//   CACHE_NAME    — 'nh90-' + BUILD_ID
//   PRECACHE_URLS — every file under build/web/ except figs/ and *.symbols,
//                   as paths relative to BASE_HREF.
//
// Replaces Flutter's auto-generated unregister stub (Flutter 3.27+ no longer
// ships an offline-first SW). Companion to the update banner in web/index.html
// — that banner relies on the 'skipWaiting' message handler below.

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // addAll is atomic: if any single resource 404s the install aborts and
    // the previous SW stays in control. Safer than a partial precache that
    // leaves the app half-broken offline.
    await cache.addAll(PRECACHE_URLS);
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(
      names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  // The update banner in index.html posts 'skipWaiting' when the user taps
  // Reload. Without this handler the banner's button does nothing.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // SPA navigation: serve cached index.html when network is unreachable so
  // deep links and refresh-while-offline still boot the app.
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        return await fetch(req);
      } catch (_) {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match('index.html');
        return cached || Response.error();
      }
    })());
    return;
  }

  // figs/: not precached (~66 MB of diagnostic PNGs). Cached opportunistically
  // on first online view so subsequent offline access works.
  if (url.pathname.includes('/assets/assets/figs/')) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      } catch (e) {
        return Response.error();
      }
    })());
    return;
  }

  // Everything else: cache-first, fall back to network. Precached assets
  // resolve instantly offline; anything new is fetched and cached.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') {
        cache.put(req, res.clone());
      }
      return res;
    } catch (e) {
      return Response.error();
    }
  })());
});
